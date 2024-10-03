/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#f1f2fd",
        "custom-blue": "rgba(63, 140, 255, 0.63)",
      },
      screens: {
        "max-md": { max: "700px" }, // max-width 700px
      },
    },
  },
  plugins: [],
};
