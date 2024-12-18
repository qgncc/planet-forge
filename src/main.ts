import "styles/index.scss";

import { calcCenter } from "lib/calcCenter";
import { Application } from "pixi.js";
import { PlanetSprite } from "sprites";

export { app };
const app = new Application();
const start = async () => {
  const appElement = document.getElementById("app")!;
  await app.init({
    background: "#000",
    resizeTo: appElement,
  });
  appElement.appendChild(app.canvas);
  const planet = new PlanetSprite({ anchor: 0.5 });
  const center = calcCenter(planet, app.screen);
  planet.position = center;
  app.stage.addChild(planet);
};
start();
