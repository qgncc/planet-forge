/**
 * Finds the closest discrete point from a sorted array of points
 * @param target The target point to find the nearest discrete value for
 * @param discretePoints Array of discrete points to search through
 * @returns The closest discrete point from the array
 * @throws Error if discretePoints array is empty
 */
export const getDiscretePoint = (
  target: number,
  discretePoints: number[],
): number => {
  if (discretePoints.length === 0) {
    throw new Error("Discrete points array cannot be empty");
  }

  // Sort array in ascending order
  const sortedPoints = [...discretePoints].sort((a, b) => a - b);

  // Handle edge cases where target is outside the range
  if (target <= sortedPoints[0]) {
    return sortedPoints[0];
  }
  if (target >= sortedPoints[sortedPoints.length - 1]) {
    return sortedPoints[sortedPoints.length - 1];
  }

  // Find the first point that is greater than the target
  const rightIndex = sortedPoints.findIndex((point) => point > target);
  const leftIndex = rightIndex - 1;

  // Compare distances to find closest point
  const rightDistance = sortedPoints[rightIndex] - target;
  const leftDistance = target - sortedPoints[leftIndex];

  return rightDistance <= leftDistance
    ? sortedPoints[rightIndex]
    : sortedPoints[leftIndex];
};
