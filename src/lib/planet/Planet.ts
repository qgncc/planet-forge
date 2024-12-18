import { Color } from "pixi.js";
import { Seed } from "types";

export class Planet {
  landColor: Color;
  waterColor: Color;
  constructor(public seed?: Seed) {
    this.landColor = new Color("#3ad42c");
    this.waterColor = new Color("#2c6dd4");
  }
}
