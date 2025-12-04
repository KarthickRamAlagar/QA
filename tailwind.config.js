/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#0b0f17",
          800: "#0f1420",
          700: "#131a26",
        },
        glass: {
          100: "rgba(255,255,255,0.08)",
          200: "rgba(255,255,255,0.14)",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
