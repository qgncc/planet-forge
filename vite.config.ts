import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import paths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), paths(), svgr()],
});
