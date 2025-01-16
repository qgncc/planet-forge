import { Container } from "pixi.js";

export interface ChunkGenerator {
  getChunk(x: number, y: number): Container;
}
