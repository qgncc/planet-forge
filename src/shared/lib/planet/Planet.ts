import { Seed } from "shared/types";
import { LandscapeLayer, layer } from "./Landscape";
import { DEFAULT_LANDSCAPE } from "./planet-types";

export type PlanetColorConfig = {
  land: string;
  water: string;
};
export type PlanetSize = number
export type PlanetOptions = {
  size: PlanetSize;
  heightMapSeed?: Seed;
  landscape?: Array<[string, number]> | LandscapeLayer[];
};

export class Planet {
  heightMapSeed: Seed;
  landscape: LandscapeLayer[];
  size: PlanetSize;
  constructor(options: PlanetOptions) {
    this.heightMapSeed = options.heightMapSeed ?? Math.random();
    this.landscape =
      options.landscape?.map((landscape) =>
        Array.isArray(landscape) ? layer(...landscape) : landscape,
      ) ?? DEFAULT_LANDSCAPE;
    this.size = options.size
  }
}
