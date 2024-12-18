import { Planet } from "lib/planet";
import { Sprite, SpriteOptions } from "pixi.js";
import { Seed } from "types";
import { generatePlanetTexture } from "./generatePlanetTexture";
export type PlanetSpriteArgs = Omit<SpriteOptions, "texture"> & { seed?: Seed };
export class PlanetSprite extends Sprite {
  constructor(options?: PlanetSpriteArgs) {
    const planet = new Planet(options?.seed);

    super({ texture: generatePlanetTexture(512, planet), ...options });
  }
}
