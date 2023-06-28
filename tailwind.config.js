/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notosans: 'NotoSansJP-Regular',
      },
      colors: {
        header: "#414141",
        circle: "#FC7400",
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00',
        },
        secondary: {
          300: '#8FE9D0',
        },
        dark: {
          500: '#414141',
          600: '#2E2E2E',
        },
        gray: {
          400: '#777777',
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
