import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://10.3.70.226:8888/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/flowable'),
      },
    },
  },
});
