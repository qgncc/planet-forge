import {
  DestroyOptions,
  Graphics,
  Ticker,
  TilingSprite,
  TilingSpriteOptions,
} from "pixi.js";
import { generatePlanetTexture } from "./generatePlanetTexture";
import { shade } from "./shade";
import { Planet } from "shared/lib";

export type PlanetSpriteArgs = TilingSpriteOptions & {
  planet: Planet;
  rotationSpeed?: number;
};

export class PlanetSprite extends TilingSprite {
  private rotationSpeed: number;
  private readonly planetWidth: number;
  constructor({
    planet,
    rotationSpeed,
    ...restOptions
  }: PlanetSpriteArgs) {
    // Create a circular mask
    const size = planet.size
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
      ...restOptions,
    });

    this.planetWidth = size;
    this.rotationSpeed = rotationSpeed ?? -1;

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
