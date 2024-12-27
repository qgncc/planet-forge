import { createNoise3D } from "simplex-noise";
import { getHeightColor } from "./getHeightColor";
import { Planet } from "lib/planet";
import { Texture } from "pixi.js";

export function generatePlanetTexture(size: number, planet: Planet) {
  const noise3D = createNoise3D();
  const canvas = document.createElement("canvas");
  canvas.width = size * 2;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const imageData = ctx!.createImageData(canvas.width, canvas.height);
  const data = imageData.data;

  const octaves = planet.heightMapSeed % 4;
  const persistence = 0.5;
  const scale = 3;

  function getNoiseValue(x: number, y: number): number {
    let noise = 0;
    let amplitude = 2;
    let frequency = (planet.heightMapSeed % 4) / 4;
    let maxValue = 0;

    for (let i = 0; i < octaves; i++) {
      const nx = Math.sin(x * Math.PI * 2) * scale;
      const ny = y * scale * 2; // Multiply by 2 to match horizontal scale since canvas is 2:1
      const nz = Math.cos(x * Math.PI * 2) * scale;

      noise +=
        (noise3D(nx * frequency, ny * frequency, nz * frequency) + 1) *
        0.5 *
        amplitude;

      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= 2;
    }

    return noise / maxValue;
  }

  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const nx = x / canvas.width;
      const ny = y / canvas.height;

      const noiseValue = getNoiseValue(nx, ny);

      const color = getHeightColor(noiseValue, planet.landscape);

      const index = (y * canvas.width + x) * 4;
      data[index] = color.red * 255;
      data[index + 1] = color.green * 255;
      data[index + 2] = color.blue * 255;
      data[index + 3] = 255;
    }
  }

  ctx!.putImageData(imageData, 0, 0);
  return Texture.from(canvas);
}
