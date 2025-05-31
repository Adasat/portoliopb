/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quantico: ['Quantico', 'sans-serif'],
        gugi: ['Gugi', 'sans-serif'],
        textMe: ['"Text Me One"', 'sans-serif'],
        zenDots: ['Zen Dots', 'sans-serif'],
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
      },
    },
  },
  plugins: [],
};
