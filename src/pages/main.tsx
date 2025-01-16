import { PlanetRenderer } from "planet-renderer/component";
import { usePlanetApp } from "planet-renderer/planet-app-context";
import { Button, Logo, Page } from "shared/ui";

export const Main = () => {
  const { app } = usePlanetApp();
  return (
    <Page>
      <PlanetRenderer width="100%" height="100%" />
    </Page>
  );
};
