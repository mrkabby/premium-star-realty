import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
   // Adjust this based on your deployment (e.g., '/subdirectory/' for GitHub Pages)
});
