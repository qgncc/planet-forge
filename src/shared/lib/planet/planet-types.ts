import { layer } from "./Landscape";
// Base landscapes
export const DEFAULT_LANDSCAPE = [
  layer("#51c3e7", 0.4), // Water
  layer("#5dffaa", 0.6), // Land
];

export const DESERT_LANDSCAPE = [
  layer("#c2b280", 0.3), // Sand
  layer("#d4b483", 0.6), // Rocky terrain
  layer("#86775f", 0.7), // Mountains
];

export const ICE_LANDSCAPE = [
  layer("#a5f2f3", 0.3), // Ice water
  layer("#ffffff", 0.1), // Snow
  layer("#d6d6d6", 0.4), // Ice
  layer("#b3b3b3", 0.75), // Mountains
];

export const VOLCANIC_LANDSCAPE = [
  layer("#3a3a3a", 0.5), // Dark rock
  layer("#1a0f0f", 1), // Volcanic rock
  layer("#ff4400", 0.4), // Lava
];

export const JUNGLE_LANDSCAPE = [
  layer("#2E8B57", 0.1), // Dark green
  layer("#32CD32", 0.3), // Lime green
  layer("#228B22", 0.6), // Forest green
  layer("#006400", 0.8), // Deep green
];

export const OCEAN_LANDSCAPE = [
  layer("#000080", 0.1), // Deep blue
  layer("#0000ff", 0.8), // Blue
  layer("#1e90ff", 0.9), // Light blue
  layer("#87ceeb", 0.1), // Sky blue
];

export const ROCKY_LANDSCAPE = [
  layer("#8B4513", 1), // Brown
  layer("#A0522D", 0.8), // Sienna
  layer("#6B4423", 0.6), // Dark brown
  layer("#800000", 0.4), // Maroon
];

// Planet type definitions
export const PLANET_TYPES = {
  TERRESTRIAL: {
    name: "Terrestrial",
    landscape: DEFAULT_LANDSCAPE,
    description: "Earth-like planet with water and vegetation",
  },
  DESERT: {
    name: "Desert",
    landscape: DESERT_LANDSCAPE,
    description: "Hot, dry planet covered in sand and rocks",
  },
  ICE: {
    name: "Ice",
    landscape: ICE_LANDSCAPE,
    description: "Frozen planet covered in ice and snow",
  },
  VOLCANIC: {
    name: "Volcanic",
    landscape: VOLCANIC_LANDSCAPE,
    description: "Active volcanic planet with flowing lava",
  },
  JUNGLE: {
    name: "Jungle",
    landscape: JUNGLE_LANDSCAPE,
    description: "Dense vegetation covers the entire surface",
  },
  OCEAN: {
    name: "Ocean",
    landscape: OCEAN_LANDSCAPE,
    description: "Planet covered almost entirely in water",
  },
  ROCKY: {
    name: "Rocky",
    landscape: ROCKY_LANDSCAPE,
    description: "Barren rocky planet with rough terrain",
  },
};

export const PLANET_TYPES_ARRAY = Object.values(PLANET_TYPES);
