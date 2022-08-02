/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    fontFamily: {
      "serif": ['Manrope', "sans-serif"]
    },
    colors: {
      "cyan": {
        300: "#5DEADC",
        500: "#10D5C2"
      },
      "red": {
        100: "#FEECE7",
        500: "#FF8C66"
      },
      "indigo": {
        200: "#CDD7EE",
        300: "#BDCCFF"
      },
      "blue": {
        50: "#FAFBFF",
        100: "#EAEEFB"
      },
      "slate": {
        400: "#858FAD",
        800: "#293356"
      },
      "white" : "#ffffff"
    },
    extend: {
      backgroundImage: {
        "background-cover" : "url('../images/bg-pattern.svg')",
        "circles" : "url(../images/pattern-circles.svg)"
      }
    },
  },
  plugins: [],
}
