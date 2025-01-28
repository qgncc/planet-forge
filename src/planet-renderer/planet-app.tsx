import { Application } from "pixi.js";
import { PlanetSprite } from "./sprites/planet/PlanetSprite";
import { calcCenter, Planet, PlanetFactory } from "shared/lib";

export class PlanetApp {
  private app: Application;
  private currentPlanet?: PlanetSprite;
  private appElement: HTMLElement | null = null;

  constructor() {
    this.app = new Application();
  }

  public async init(appElement: HTMLElement): Promise<void> {
    this.appElement = appElement;
    await this.app.init({
      background: "#000",
      resizeTo: this.appElement,
    });
    this.appElement.appendChild(this.app.canvas);
  }

  public resize(): void {
    if (this.currentPlanet) {
      const center = calcCenter(this.currentPlanet, this.app.screen);
      this.currentPlanet.position = center;
    }
  }

  public destroy(): void {
    this.app.destroy(true, {
      children: true,
      texture: true,
    });
  }
}
