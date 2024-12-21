import { Application } from "pixi.js";
import { PlanetSprite } from "./sprites/planet/PlanetSprite";
import { calcCenter } from "lib/calcCenter";
import { Planet } from "lib/planet";
import { PlanetFactory } from "lib/planet/PlanetFactory";

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

  public async renderPlanet(planet: Planet): Promise<void> {
    // Remove existing planet if any
    if (this.currentPlanet) {
      this.app.stage.removeChild(this.currentPlanet);
      this.currentPlanet.destroy();
    }

    // Create and add new planet
    this.currentPlanet = new PlanetSprite({ planet });
    const center = calcCenter(this.currentPlanet, this.app.screen);
    this.currentPlanet.position = center;
    this.app.stage.addChild(this.currentPlanet);
    this.currentPlanet.startRotation();
  }
  public async renderRandomPlanet(): Promise<void> {
    this.renderPlanet(PlanetFactory.createRandomPlanet());
  }

  public setRotationSpeed(speed: number): void {
    // if (this.currentPlanet) {
    //   this.currentPlanet.setRotationSpeed(speed);
    // }
  }

  public toggleRotation(): void {
    // if (this.currentPlanet) {
    //   this.currentPlanet.toggleRotation();
    // }
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
