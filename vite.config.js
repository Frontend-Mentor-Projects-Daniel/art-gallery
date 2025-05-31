import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'public/assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        location: 'location-page.html',
      },
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
