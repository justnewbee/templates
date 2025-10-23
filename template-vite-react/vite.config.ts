import path from 'node:path';

import {
  defineConfig
} from 'vite';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components']
      }
    })
  ],
  server: {
    host: '0.0.0.0'
  },
  build: {
    // outDir: 'dist',
    // assetsDir: 'assets',
    // emptyOutDir: true,
    // chunkSizeWarningLimit: 500,
    cssCodeSplit: false,
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: 'index.js',
        manualChunks: {
          // 'vendor-lodash': ['lodash'],
          'vendor-react': ['react', 'react-dom', 'react-router', 'styled-components']
        },
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: assetInfo => {
          if (assetInfo.names[assetInfo.names.length - 1]?.endsWith('.css')) {
            return 'index.css';
          }
          
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});
