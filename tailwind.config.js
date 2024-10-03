/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-md': { 'max': '700px' }, // max-width 700px
      },
    },
  },
  plugins: [],
}