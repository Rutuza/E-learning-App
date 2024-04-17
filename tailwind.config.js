/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight_blue: "#121D28",
        pastel_blue: "#7197F9",
        pastel_pink: "#FF4773",
        light_navy: "#1A2531",
        slate_blue: "#3F4662",
        crimson: "#FF4773",

      },
      
      fontFamily: {

      }, 

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },

    },
  },
  plugins: [],
}