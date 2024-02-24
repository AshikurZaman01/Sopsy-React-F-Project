/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      primary: "#fea928",
      secondary: "#ed89000"
    },
    container: {
      center: true,
      padding: {
        default : "1rem",
        sm: "3rem",
      }
    }
  },
  plugins: [require("daisyui")],
}

