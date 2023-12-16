/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '3xl': '1600px',
      '4xl': '3000px'
    },
    extend: {},
  },
  plugins: [],
}

