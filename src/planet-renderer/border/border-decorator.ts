import { Container, Graphics } from "pixi.js";

export const border = (container: Container)=>{
  const border = new Graphics().rect(0, 0, container.width, container.height).stroke({color: "red", width: 2})
  container.addChild(border)
  return container
}
