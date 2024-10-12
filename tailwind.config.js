/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#07969E",
        rise_grey: "#4A5050",
        rise_black: "#2D2D2D",
        rise_orange: "#FFF4F0",
        rise_indigo: "#F6F2FF",
        rise_teal: "#ECFEFE",
        white: "#FFFFFF",
        primary_light:"#40BBC3",
        rise_grey2:"#7B8DA8",
        rise_border:"#919FB533"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
