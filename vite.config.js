import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@views': path.resolve(__dirname, './src/views'),
      '@pages': path.resolve(__dirname, './src/views/pages'),
      '@comps': path.resolve(__dirname, './src/views/components'),
      '@service': path.resolve(__dirname, './src/service'),
      '@routes': path.resolve(__dirname, './src/routes/routes.library.js'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@context': path.resolve(__dirname, './src/context-api'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/src/styles/mixins" as *;
        `,
      },
    },
  },
})
