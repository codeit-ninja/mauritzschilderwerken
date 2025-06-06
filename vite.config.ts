import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/scss/utils.scss" as *;',
      },
    },
  },
  server: {
    fs: {
        allow: ['..']
    }
  }
});
