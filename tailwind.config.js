/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        patternLight: "url(../src/img/pattern-light.png)",
        patternDark: "url(../src/img/pattern-dark.png)",
        dark: "url(../src/img/background-dark.png)",
        light: "url(../src/img/background-light.png)",
      },
      fontFamily: {
        monoton: ["Monoton"],
        oswald: ["Oswald"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
