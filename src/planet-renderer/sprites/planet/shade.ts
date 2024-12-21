import { Graphics } from "pixi.js";

export const shade = (radius: number) => {
  const shade = new Graphics().circle(radius, radius, radius).fill("#00000025");
  const mask = new Graphics()
    .circle(radius * 0.75, radius * 0.75, radius)
    .fill();
  shade.setMask({ mask, inverse: true });
  shade.addChild(mask);
  return shade;
};
