import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import paths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), paths()],
});
