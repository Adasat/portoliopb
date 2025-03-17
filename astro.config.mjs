import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    vue({ appEntrypoint: '/src/_app.ts', ssr:false }),
   
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
