import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_BACKEND_PORT: process.env.VITE_BACKEND_PORT || 5000, // Provide a default value for production
    VITE_STRIPE_PUB_KEY: process.env.VITE_STRIPE_PUB_KEY,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
