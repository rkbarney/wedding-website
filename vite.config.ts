import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg'],
  base: command === 'serve' ? '/' : '/wedding-website/',
  build: {
    outDir: 'dist'
  }
}))
