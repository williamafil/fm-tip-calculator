const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "hsl(172, 67%, 45%)",
          600: "hsl(183, 100%, 15%)",
          500: "hsl(186, 14%, 43%)",
          400: "hsl(184, 14%, 56%)",
          350: "#9FE8DF",
          300: "hsl(185, 41%, 84%)",
          200: "hsl(189, 41%, 97%)", // #F3F9FA
          50: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        "space-mono": ["Space Mono", "serif"],
      },
      outline: {
        cyan: ["1px solid hsl(172, 67%, 45%)", "1px"],
      },
      ringColor: {
        red: colors.red,
        cyan: colors.cyan,
      },
      ringWidth: {
        DEFAULT: "2px",
        6: "6px",
        10: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
