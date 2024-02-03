import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// }
// //   build: {
// //   chunkSizeWarningLimit: 1500, // Set the limit to your desired value in kilobytes
// // },

// )

// vite.config.js

export default {
  build: {
    chunkSizeWarningLimit: 1500, // Set the limit to your desired value in kilobytes
  },
  plugins: [react()],
};
