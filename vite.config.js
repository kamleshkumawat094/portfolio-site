import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss(),
  ],
  
 server: {
    allowedHosts: [
      "7a7bfd38eada.ngrok-free.app"  // yaha apna ngrok/localtunnel ka host add karo
    ],
  },

});

