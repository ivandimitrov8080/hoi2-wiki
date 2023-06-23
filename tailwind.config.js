/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
