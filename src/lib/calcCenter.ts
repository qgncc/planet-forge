export type ContainerWithDimensions = { width: number; height: number };
export const calcCenter = (
  child: ContainerWithDimensions,
  parent: ContainerWithDimensions,
) => {
  const center = {
    x: parent.width / 2 - child.width / 2,
    y: parent.height / 2 - child.height / 2,
  };
  console.log(child.width, child.height);
  console.log(center);
  return center;
};
