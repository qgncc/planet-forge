import { Seed } from "types";
import { LandscapeLayer, layer } from "./Landscape";
import { DEFAULT_LANDSCAPE } from "./planet-types";

export type PlanetColorConfig = {
  land: string;
  water: string;
};
// 30% | 45% | 60% | 75% | 90% of a container
export type PlanetSize = 1 | 2 | 3 | 4 | 5;
export type PlanetOptions = {
  size?: PlanetSize;
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
    this.size = options.size ?? 4;
  }
}
