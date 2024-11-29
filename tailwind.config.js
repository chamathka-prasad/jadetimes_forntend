/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        heading: "#111111",
        accent: "#FF322E"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".overflow-wrap-anywhere": {
          "overflow-wrap": "anywhere",
        },
      });
    },
  ],
};
