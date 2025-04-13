/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",         // App Router
    "./src/components/**/*.{js,ts,jsx,tsx}",  // Компоненти
  ],
  theme: {
    extend: {
      colors: {
        khaki: "#7b8c65",
        orangeAccent: "#d9843b",
        graphite: "#2f3e46",
        lightBg: "#f2f1e8",
      },
    },
  },
  plugins: [],
}

