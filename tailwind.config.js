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
      colors: {
        navbarActiveHighlight: "rgb(243, 249, 255)",
        navbarActiveText: "rgb(46, 119, 205)",
        textGray: "#474747",
        borderGray: "#AFAFAF",
        dividerGray: "#CECECE",
        borderBlue: "#3B5EFF",
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
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
