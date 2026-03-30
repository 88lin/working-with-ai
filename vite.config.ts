import { defineConfig } from "vite-plus";
import { resolve } from "path";

export default defineConfig({
  lint: { options: { typeAware: true, typeCheck: true } },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        en: resolve(__dirname, "en/index.html"),
      },
    },
  },
});
