import { colord } from "colord";
import { LandscapeLayer } from "lib/planet/Landscape";
import { Color } from "pixi.js";
/**
 * @param {number} height A value between -1 and 1 representing elevation
 */
export const getHeightColor = (height: number, landscape: LandscapeLayer[]) => {
  // Sort layers by level to ensure correct ordering
  const sortedLayers = [...landscape].sort((a, b) => a.level - b.level);

  // Find the appropriate layer based on height
  const layer =
    sortedLayers.find((layer) => height <= layer.level) ||
    sortedLayers[sortedLayers.length - 1];

  // Convert the layer color to a PIXI Color and apply darkness based on height
  return new Color(colord(layer.color).toHex());
};
