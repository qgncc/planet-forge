import { Texture } from "pixi.js";
import { createNoise2D } from "simplex-noise";
import { Planet } from "lib/planet";

export function generatePlanetTexture(size: number, planet: Planet) {
  const noise2D = createNoise2D();
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const imageData = ctx!.createImageData(size, size);
  const data = imageData.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = x / size - 0.5;
      const ny = y / size - 0.5;
      const distance = Math.sqrt(nx * nx + ny * ny);

      if (distance > 0.5) {
        // Make the outer region transparent
        const index = (y * size + x) * 4;
        data[index + 3] = 0;
        continue;
      }

      // Generate noise value for terrain
      const noiseValue = noise2D(nx * 6, ny * 6); // Adjust scale
      const color = noiseValue > 0 ? planet.landColor : planet.waterColor;

      const index = (y * size + x) * 4;
      data[index] = color.red * 255; // Red
      data[index + 1] = color.green * 255; // Green
      data[index + 2] = color.blue * 255; // Blue
      data[index + 3] = 255; // Alpha
    }
  }

  ctx!.putImageData(imageData, 0, 0);
  return Texture.from(canvas);
}
