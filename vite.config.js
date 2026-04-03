import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        upsell: resolve(__dirname, 'upsell.html'),
        downsell: resolve(__dirname, 'downsell.html'),
        obrigado: resolve(__dirname, 'obrigado.html')
      }
    }
  }
});
