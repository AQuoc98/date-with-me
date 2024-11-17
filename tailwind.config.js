/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Regular"],
        bold: ["Bold"],
        thin: ["Thin"],
        light: ["Light"],
      },
      animation: {
        cloudEffect: "moveclouds linear infinite",
      },
      keyframes: {
        moveclouds: {
          "0%": { top: "500px" },
          "100%": { top: "-500px" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
};
