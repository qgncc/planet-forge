import { Graphics, Ticker, TilingSprite, TilingSpriteOptions } from "pixi.js";
import { Seed } from "types";
import { generatePlanetTexture } from "./generatePlanetTexture";
import { shade } from "./shade";
import { PlanetFactory } from "lib/planet/PlanetFactory";

export type PlanetSpriteArgs = TilingSpriteOptions & {
  seed?: Seed;
  rotationSpeed?: number;
};

export class PlanetSprite extends TilingSprite {
  private rotationSpeed: number;
  private readonly planetWidth: number;

  constructor(options?: PlanetSpriteArgs) {
    const planet = PlanetFactory.createRandomPlanet();
    const size = 512;

    // Create a circular mask
    const mask = new Graphics()
      .circle(size / 2, size / 2, size / 2)
      .fill("#fff");

    // Create texture with doubled width for seamless rotation
    const texture = generatePlanetTexture(size, planet);

    super({
      texture,
      width: size,
      height: size,
      mask,
      children: [mask, shade(size / 2)],
      ...options,
    });

    this.planetWidth = size;
    this.rotationSpeed = options?.rotationSpeed ?? -1;

    // Set initial tiling position to center of the texture
    this.tilePosition.x = -this.planetWidth;
  }

  public startRotation(): void {
    Ticker.shared.add(() => {
      // Update tiling position and wrap around when needed
      this.tilePosition.x += this.rotationSpeed;
      // Wrap the texture position
      if (this.tilePosition.x <= -this.planetWidth * 2) {
        this.tilePosition.x = 0;
      } else if (this.tilePosition.x >= 0) {
        this.tilePosition.x = -this.planetWidth * 2;
      }
    });
  }
}
