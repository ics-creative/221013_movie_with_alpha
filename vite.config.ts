import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs",
    rollupOptions: {
      input: {
        main: "src/index.html",
      },
    },
  },
  base:"/221013_movie_with_alpha",
  server: {
    port: 3344,
  },
});
