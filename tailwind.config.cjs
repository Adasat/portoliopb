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
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        ibmPlexSans: ['IBM Plex Sans', 'sans-serif'],
      },
      colors: {
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        accent: 'var(--color-accent)',
        green1: 'var(--color-green1)',
        green2: 'var(--color-green2)',
        green3: 'var(--color-green3)',
        customGray: 'var(--color-customGray)',
        customGray2: 'var(--color-customGray2)',
        customGray3: 'var(--color-customGray3)',

        backgroundReact: 'var(--color-background-react)',
        primaryReact: 'var(--color-primary-react)',
        secondaryReact: 'var(--color-secondary-react)',
        tertiaryReact: 'var(--color-terciary-react)',
        accentReact: 'var(--color-accent-react)',
        
      },
      dropShadow: {
        /* nombre       offset-x offset-y blur   color       */
        'flag-red':    '0 0 16px #BA1A1A',
        'flag-blue':  '0 0 16px #3B83BD',
        'flag-shadow': '0 0 16px #000000',

      },
      screens: {
        sm: '640px',
        'ssm:': '768px',
        md: '880px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
