import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'theme-app-extension/assets'),
    target: 'es2015',
    lib: {
      name: 'theme-app-extension-example',
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['umd'],
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
})
