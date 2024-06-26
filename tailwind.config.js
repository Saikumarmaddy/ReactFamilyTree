/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('../public/bgImage.png')",
      },
    },
  },
  plugins: [],
}