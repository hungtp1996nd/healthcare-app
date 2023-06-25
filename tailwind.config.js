/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#414141",
        circle: "#FC7400",
      },
    },
  },
  plugins: [require("daisyui")],
};
