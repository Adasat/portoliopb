// tailwind.config.js
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        gugi: 'var(--font-gugi)', // Definiendo la fuente Gugi
      },
      colors: {
        background: 'var(--color-background)',
        primary: 'var(--color-primary)', 
        secondary: 'var(--color-secondary)', 
        tertiary: 'var(--color-tertiary)', 
        accent: 'var(--color-accent)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
});
