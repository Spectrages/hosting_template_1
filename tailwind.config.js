module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        orange: { 50: "#f5f5dc", 300: "#ffb74d", "50_a2": "#f5f5dca2" },
        gray: {
          400: "#bcbcbc",
          800: "#424242",
          900: "#1b1b1b",
          "200_b2": "#f2f1f1b2",
          "400_01": "#b6b6b6",
        },
        white: { A700_0c: "#ffffff0c", A700: "#ffffff" },
        black: { 900: "#000000", "900_33": "#00000033" },
        blue: { 100: "#c8e8f7" },
      },
      fontFamily: { roboto: "Roboto", didactgothic: "Didact Gothic" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
