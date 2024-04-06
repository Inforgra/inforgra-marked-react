import { defineConfig } from 'vite';
import { vitePlugin as remix } from "@remix-run/dev";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "inforgra-react-markdown",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "copy-to-clipboard",
        "clsx",
        "katex",
        "marked",
        "prismjs",
        "react",
        "react-dom",
      ],
      output: {
        globals: {
          clsx: "clsx",
          "copy-to-clipboard": "copy-to-clipboard",
          katex: "katex",
          marked: "marked",
          prismjs: "prismjs",
          react: "React",
          "react-dom": "ReactDOM",
        }
      }
    },
  },
})
