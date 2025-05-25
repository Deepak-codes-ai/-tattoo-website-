import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/tattoo-website/", // 👈 this is important for GitHub Pages
  plugins: [tailwindcss(), react()],
});
