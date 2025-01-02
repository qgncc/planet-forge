import { useEffect, useRef } from "preact/hooks";
import { FC } from "preact/compat";
import { PlanetFactory } from "shared/lib";
import { usePlanetApp } from "./planet-app-context";
export type PlanetRendererProps = {
  width: number | string;
  height: number | string;
};
export const PlanetRenderer: FC<PlanetRendererProps> = ({ width, height }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { app } = usePlanetApp();
  useEffect(() => {
    if (!containerRef.current) return;
    app
      .init(containerRef.current)
      .then(() => app.renderPlanet(PlanetFactory.createRandomPlanet()));
    return async () => {
      app.destroy();
    };
  }, []);

  return (
    <div
      id="pixi_app"
      ref={containerRef}
      style={{
        maxWidth: 500,
        width,
        position: "relative",
        aspectRatio: "1 / 1", // This ensures a 1:1 aspect ratio (square)
      }}
    />
  );
};
