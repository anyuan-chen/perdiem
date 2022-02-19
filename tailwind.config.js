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
      width: {
        "10vw": "10vw",
        "20vw": "20vw",

        "30vw": "30vw",

        "40vw": "40vw",

        "50vw": "50vw",

        "60vw": "60vw",

        "70vw": "70vw",

        "80vw": "80vw",
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
