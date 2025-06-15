
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Update base to the repo name for GitHub Pages.
// IMPORTANT: Replace 'your-repo-name' below with your actual GitHub repository name.
export default defineConfig(({ mode }) => ({
  base: '/your-repo-name/', // CHANGE THIS to your actual repo name!
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
