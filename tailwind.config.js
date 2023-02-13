/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        se: "375px",
        y9: "540px",
      },

      fontFamily: {
        Manrope: "manrope",
        iranyekan: "iranyekan",
      },
      colors: {
        body: "#f2f4f5",
        nav: "#14151a",
        navDark: "#182122",
        pramery: "#784ed1",
        secondBody: "#ffffff",
        text: "#14151a",
        textSecond: "#e3e4e5",
        textTher: "#a3a5bb",
        DarkText: "#f9f9f9",
        DarkPramery: "#242c2e",
        DarkBody: "#182122",
      },
    },
  },
  plugins: [],
};
