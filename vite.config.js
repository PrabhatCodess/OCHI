import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build' // Specify the output directory
  },
  base: '/OCHI/',  // Ensure this matches your GitHub repository name
});




