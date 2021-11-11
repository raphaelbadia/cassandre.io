// tailwind.config.js

const colors = require("tailwindcss/colors");
console.log(colors);
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        yellow: {
          50: "#FDFCEE",
          100: "#FFFDF2",
          200: "#FFF6CA",
          300: "#FEEFA1",
          400: "#FEE979",
          500: "#FEE250",
          600: "#FED918",
          700: "#DDB901",
          800: "#A58A01",
          900: "#6D5C01",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
