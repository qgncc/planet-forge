import { Seed } from "types";
import { Planet } from "./Planet";
import { PLANET_TYPES_ARRAY } from "./planet-types";

export class PlanetFactory {
  static createRandomPlanet(seed?: Seed): Planet {
    seed = seed ?? Math.random() * 1000;
    const index = Math.floor(seed % PLANET_TYPES_ARRAY.length);
    const type = PLANET_TYPES_ARRAY[index];
    console.log(type);
    const planet = new Planet({
      heightMapSeed: seed,
      landscape: type.landscape,
    });

    return planet;
  }
}
