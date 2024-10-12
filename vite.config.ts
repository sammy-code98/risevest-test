// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: [{ find: "@", replacement: path.resolve(__dirname, ".", "src") }],
//   },
//   plugins: [react()],
//   define: {
//     "process.env": process.env,
//   },
// });

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
