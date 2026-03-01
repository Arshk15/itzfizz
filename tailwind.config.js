/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['sans-serif'],
      },
      letterSpacing: {
        widest: '0.5em',
      },
    },
  },
  plugins: [],
};