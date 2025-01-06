import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // or '0.0.0.0' to allow LAN access
    port: 5173, // ensure this matches your request
    https: false // make sure HTTPS is disabled
  }
})
