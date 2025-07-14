import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  integrations: [
    vue({ appEntrypoint: '/src/_app.ts', ssr:false }),
    react(),
    tailwind()
   
  ],
  vite: {
    plugins: [],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  }
});
