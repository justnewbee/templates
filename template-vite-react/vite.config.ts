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
    // target: 'es2022',
    sourcemap: false
  }
});
