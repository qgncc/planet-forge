import { Seed } from "types";
import { LandscapeLayer, layer } from "./Landscape";
import { DEFAULT_LANDSCAPE } from "./planet-types";

export type PlanetColorConfig = {
  land: string;
  water: string;
};
export type PlanetOptions = {
  heightMapSeed?: Seed;
  landscape?: Array<[string, number]> | LandscapeLayer[];
};

export class Planet {
  heightMapSeed?: Seed;
  landscape: LandscapeLayer[];
  constructor(options: PlanetOptions) {
    this.heightMapSeed = options.heightMapSeed ?? Math.random();
    this.landscape =
      options.landscape?.map((landscape) =>
        Array.isArray(landscape) ? layer(...landscape) : landscape,
      ) ?? DEFAULT_LANDSCAPE;
  }
}
