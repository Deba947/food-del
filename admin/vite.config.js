import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Replace 'food-del-admin' with your actual repo name if using GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/food-del-admin/',
})
