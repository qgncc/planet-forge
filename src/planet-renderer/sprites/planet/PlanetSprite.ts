import {
  DestroyOptions,
  Graphics,
  Ticker,
  TilingSprite,
  TilingSpriteOptions,
} from "pixi.js";
import { generatePlanetTexture } from "./generatePlanetTexture";
import { shade } from "./shade";
import { Planet } from "lib/planet";

export type PlanetSpriteArgs = TilingSpriteOptions & {
  planet: Planet;
  rotationSpeed?: number;
};

export class PlanetSprite extends TilingSprite {
  private rotationSpeed: number;
  private readonly planetWidth: number;

  constructor(options: PlanetSpriteArgs) {
    const size = 512;

    // Create a circular mask
    const mask = new Graphics()
      .circle(size / 2, size / 2, size / 2)
      .fill("#fff");

    // Create texture with doubled width for seamless rotation
    const texture = generatePlanetTexture(size, options.planet);

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
  public destroy(options?: DestroyOptions): void {
    Ticker.shared.remove(this.rotate);
    super.destroy(options);
  }
  private rotate = () => {
    // Update tiling position and wrap around when needed
    this.tilePosition.x += this.rotationSpeed;
    // Wrap the texture position
    if (this.tilePosition.x <= -this.planetWidth * 2) {
      this.tilePosition.x = 0;
    } else if (this.tilePosition.x >= 0) {
      this.tilePosition.x = -this.planetWidth * 2;
    }
  };
  public startRotation(): void {
    Ticker.shared.add(this.rotate);
  }
}
