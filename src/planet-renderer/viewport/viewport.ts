import { Container, ContainerOptions, Graphics, Point, v8_0_0 } from "pixi.js";
import { ChunkGenerator } from "./types";

export type ViewportOptions = {
  width: number;
  height: number;
  chunkGenerator: ChunkGenerator;
} & ContainerOptions;

export class Viewport extends Container {
  private chunkGenerator: ChunkGenerator;
  private container = new Container();
  public isDragging = false;
  private dragStart: Point | null = null;
  constructor({
    width,
    height,
    chunkGenerator,
    ...containerOptions
  }: ViewportOptions) {
    super(containerOptions);
    const mask = new Graphics().rect(0, 0, width, height).fill("#fff");
    this.setMask(mask);
    this.chunkGenerator = chunkGenerator;
    this.initDragListners();
    this.update();
  }

  private initDragListners(): void {
    this.container.eventMode = "static";
    this.container.on("pointerdown", this.onDragStart.bind(this));
    this.container.on("pointermove", this.onDragMove.bind(this));
    this.container.on("pointerup", this.onDragEnd.bind(this));
    this.container.on("pointerupoutside", this.onDragEnd.bind(this));
  }

  private onDragStart(event: any): void {
    this.dragStart = new Point(
      event.global.x - this.container.x,
      event.global.y - this.container.y,
    );
    this.isDragging = true;
  }

  private onDragMove(event: any): void {
    if (this.isDragging && this.dragStart) {
      const newX = event.global.x - this.dragStart.x;
      const newY = event.global.y - this.dragStart.y;
      this.container.position.set(newX, newY);
      this.update();
    }
  }
  private update() {
    const chunk = this.chunkGenerator.getChunk(0, 0);
    this.addChild(chunk);
  }
  private onDragEnd(): void {
    this.isDragging = false;
    this.dragStart = null;
  }
}
