import { PlanetRenderer } from "planet-renderer/component";
import { usePlanetApp } from "planet-renderer/planet-app-context";
import { Page } from "shared/ui";

export const Main = () => {
  const { app } = usePlanetApp();
  return (
    <Page>
      <PlanetRenderer width="80%" height="80%" />
      <button onClick={() => app.renderRandomPlanet()}>
        Сгенерировать планету
      </button>
    </Page>
  );
};
