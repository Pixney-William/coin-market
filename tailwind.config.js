module.exports = {
  purge: { enabled: true, content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["ClashGrotesk"],
    },
    extend: {
      maxWidth: {
        card: "320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
