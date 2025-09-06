/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode via class
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Blue
        secondary: '#14B8A6', // Teal
        background: '#F3F4F6', // Light Gray
        darkBackground: '#1F2937', // Dark Gray
        text: '#1F2937', // Dark Text
        darkText: '#D1D5DB', // Light Text
      },
    },
  },
  plugins: [],
};
