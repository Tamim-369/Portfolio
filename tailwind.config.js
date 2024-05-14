/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyGradient: {
          light: "#87CEEB", // Light sky blue color
          dark: "#1E90FF", // Dark sky blue color
        },
      },
    },
  },
  plugins: [],
};
