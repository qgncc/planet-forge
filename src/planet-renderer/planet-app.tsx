import { Application } from "pixi.js";
import { PlanetSprite } from "./sprites/planet/PlanetSprite";
import { Space } from "./space";
import { Viewport } from "./viewport";
import { seed } from "./seed";

export class PlanetApp {
  private app: Application;
  private appElement: HTMLElement | null = null;
  private viewport: Viewport | null = null;
  constructor() {
    this.app = new Application();
  }

  public async init(appElement: HTMLElement): Promise<void> {
    this.appElement = appElement;
    await this.app.init({ resizeTo: appElement, background: "#000" });
    this.viewport = new Viewport({
      width: this.app.screen.width,
      height: this.app.screen.height,
      chunkGenerator: new Space({chunkHeight: 1000 , chunkWidth: 1000, seed: seed(), planetSize: 50}),
    });

    this.app.stage.addChild(this.viewport);
    this.appElement?.appendChild(this.app.canvas);
  }

  public destroy(): void {
    this.app.destroy(true, {
      children: true,
      texture: true,
    });
  }
}
