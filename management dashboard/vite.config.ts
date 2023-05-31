import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    visualizer({
      template: "treemap", // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html", // will be saved in project's root
    }) as PluginOption,],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy'
      }
    }
  }
})