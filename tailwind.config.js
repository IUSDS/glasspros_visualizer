/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'sans-serif']
      },
      colors: {
        glassBlue: '#35C9DD',
        customGrey: '#393b36'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
