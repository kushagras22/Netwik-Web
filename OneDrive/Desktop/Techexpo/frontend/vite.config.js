import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // This tells Vite that '@' should resolve to the 'src' folder
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Vite React PWA',
        short_name: 'VitePWA',
        description: 'A Vite-powered PWA with React',
        theme_color: '#000000',
        icons: [
          {
            src: '/icons/icons.png', // Relative path from the 'public' directory
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icons.png', // Relative path from the 'public' directory
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
