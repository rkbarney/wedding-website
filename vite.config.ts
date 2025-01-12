import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wedding-website/',
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg']
})
