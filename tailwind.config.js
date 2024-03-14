/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        't': '0.8rem', // example of custom tiny font size
     
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
