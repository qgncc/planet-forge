import { Main } from "pages/main";
import { PlanetAppProvider } from "planet-renderer/planet-app-context";

export function App() {
  return (
    <PlanetAppProvider>
      <Main />
    </PlanetAppProvider>
  );
}
