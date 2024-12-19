/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      serif: ["Caudex", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        heading: "#111111",
        accent: "#DA331B",
      },
    },
    screens: {
      ...defaultTheme.screens,
      sm: "600px",
      lg: "1200px"
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
