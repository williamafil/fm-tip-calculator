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
          300: "hsl(185, 41%, 84%)",
          200: "hsl(189, 41%, 97%)",
          100: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        "space-mono": ["Space Mono", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
