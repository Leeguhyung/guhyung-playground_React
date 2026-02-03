import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          "https://5000-firebase-guhyung-playground-1769828944144.cluster-va5f6x3wzzh4stde63ddr3qgge.cloudworkstations.dev",
        changeOrigin: true,
        secure: false, // HTTP 서버로 요청을 보낼 때 보안 체크를 우회합니다.
      },
    },
  },
});
