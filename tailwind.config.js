/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
        serif: ["Lora var", ...fontFamily.serif],
      },
      scale: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
