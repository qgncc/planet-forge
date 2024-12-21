import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";
import { PlanetApp } from "./planet-app";

type PlanetAppContextType = {
  app: PlanetApp;
};

const PlanetAppContext = createContext<PlanetAppContextType | null>(null);

export const PlanetAppProvider = ({
  children,
}: {
  children: preact.ComponentChildren;
}) => {
  const [app] = useState<PlanetApp>(new PlanetApp());

  return (
    <PlanetAppContext.Provider value={{ app }}>
      {children}
    </PlanetAppContext.Provider>
  );
};

export const usePlanetApp = () => {
  const context = useContext(PlanetAppContext);
  if (!context) {
    throw new Error("usePlanetApp must be used within a PlanetAppProvider");
  }
  return context;
};
