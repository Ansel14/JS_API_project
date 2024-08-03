/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        play: "Play",
      },
      colors: {
        primary: "#FF9B71",
        secondary: "#114B5F",
        dark: "#222222",
        light: "#ffffff",
        delete: "#C70000",
      }
    },
  },
  plugins: [],
};
