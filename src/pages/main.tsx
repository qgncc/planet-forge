import { PlanetRenderer } from "planet-renderer/component";
import { usePlanetApp } from "planet-renderer/planet-app-context";

export const Main = () => {
  const { app } = usePlanetApp();
  return (
    <>
      <PlanetRenderer width={1000} height={1000} />
      <button onClick={() => app.renderRandomPlanet()}>
        Сгенерировать планету
      </button>
    </>
  );
};
