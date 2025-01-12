import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/wedding-website/' : '/',
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg']
}))
