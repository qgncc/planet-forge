import { Point } from 'pixi.js';

export const rotate = (deg: number, point: Point) =>{
  const matrix = [
    new Point(Math.cos(deg), -Math.sin(deg)),
    new Point (Math.sin(deg), -Math.cos(deg))
  ]
  return new Point(point.dot(matrix[0]), point.dot(matrix[1]))
}
