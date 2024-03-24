import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  // Enable React to support React JSX components.
  integrations: [
    react(),
    tailwind({
      config: { path: "./tailwind.config.js" },
    }),
  ],
});
