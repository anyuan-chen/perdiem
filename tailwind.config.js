module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "Manrope",
      },
      backgroundImage: {
        "card-small": "url('/design/card.svg')",
      },
    },
  },
  plugins: [],
};
