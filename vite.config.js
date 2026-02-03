import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://15.165.40.25:5000",
        changeOrigin: true,
        secure: false, // HTTP 서버로 요청을 보낼 때 보안 체크를 우회합니다.
      },
    },
  },
});
