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
  server: {
    port: 3344,
  },
});
