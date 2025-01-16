import { Seed } from "shared/types";
import { Planet } from "./Planet";
import { PLANET_TYPES_ARRAY } from "./planet-types";
export type CreateRandomPlanetOptions = {
  seed?: Seed;
  size: number
};
export class PlanetFactory {
  static createRandomPlanet(options: CreateRandomPlanetOptions): Planet {
    const seed = options?.seed ?? Math.random() * 1000;
    const index = Math.floor(seed % PLANET_TYPES_ARRAY.length);
    const type = PLANET_TYPES_ARRAY[index];
    const planet = new Planet({
      heightMapSeed: seed,
      landscape: type.landscape,
      size: options.size
    });

    return planet;
  }
}
