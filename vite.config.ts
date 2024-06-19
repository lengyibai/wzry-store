import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/styles/index.less";',
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://152.136.185.210:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
