import { Container, Point } from "pixi.js";
import { ChunkGenerator } from "./viewport/types";
import { PlanetSprite } from "./sprites";
import { PlanetFactory } from "shared/lib";
import { border } from "./border";
import { rotate } from "./utils";
type SpaceArgs = {
  chunkWidth: number;
  chunkHeight: number;
  seed: number
  planetSize?: number
}

export class Space implements ChunkGenerator {
  private chunkWidth: number
  private chunkHeight: number
  public seed: number
  private center: Point
  private shortestSide: number
  private planetSize: number
  constructor(
    {chunkWidth, chunkHeight, seed, ...options}: SpaceArgs
  ) {
    this.chunkWidth = chunkWidth
    this.chunkHeight = chunkHeight
    this.seed = seed
    this.center = new Point(chunkWidth/2, chunkHeight/2)
    console.log(this.center)
    this.shortestSide = chunkWidth > chunkHeight? chunkHeight: chunkWidth
    this.planetSize = options?.planetSize ?? 0.1 * this.shortestSide
  }
  getChunk(x: number, y: number): Container {
    const chunk = new Container({ width: this.chunkWidth, height: this.chunkHeight });
    const positions: Point[] = this.generatePositions(this.center)

    positions.forEach(position=>{
     const planet = PlanetFactory.createRandomPlanet({size: this.planetSize, seed: this.seed+position.magnitudeSquared()})
     console.log(planet)
     const planetSprite = new PlanetSprite({planet: planet})
     chunk.addChild(planetSprite)
    })

    return border(chunk)
  }
  private generateNextPosition(start: Point){
    const direction = new Point(
      Math.sin(this.seed * 1/(20*(index+1))) * this.shortestSide,
      Math.cos(this.seed * 1/(20*(index+1))) * this.shortestSide
    )


  private planetCanBePlaced(position: Point, positions: Point[]){
    const bufferRadiusSquared = 0.01 * this.shortestSide * this.shortestSide
    for (let i = 0; i < positions.length; i++){
      const otherPosition = positions[i]
      if(position.subtract(otherPosition).magnitudeSquared() < bufferRadiusSquared){
        return false
      }
    }
    return true
  }
}
