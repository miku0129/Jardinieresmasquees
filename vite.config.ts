import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailWindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    open: true, // 自動でブラウザを開く
    port: 3000, // ここでポート番号を指定します
  },
  build: {
    outDir: "build", // ビルドの出力先ディレクトリ
  },
  plugins: [react(), tailWindcss(), svgr()],
  define: {
    global: {},
  },
});
