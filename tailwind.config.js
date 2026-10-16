/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "420px",
      md: "760px",
      lg: "1020px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
      },
      colors: {
        ink: "#17202c",
        orange: {
          DEFAULT: "#d86a16",
          dark: "#bd5910",
        },
      },
    },
  },
  plugins: [],
};
