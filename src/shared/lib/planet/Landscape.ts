export class LandscapeLayer {
  constructor(
    public color: string,
    public level: number,
  ) {}
}
export const layer = (color: string, level: number) =>
  new LandscapeLayer(color, level);
