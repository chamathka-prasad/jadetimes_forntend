/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".overflow-anywhere": {
          "overflow-wrap": "anywhere",
        },
      });
    },
  ],
};
