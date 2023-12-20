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
    extend: {
      colors: {
        amarillo: '#f7aa24ff',
        azul: '#2d3b73ff',
        naranja: '#ec6e25ff',
        rojo: '#cd1532ff'
      },
      fontFamily: {
        'open-sans' : ['Open Sans', 'sans-serif']
    }
    },
  },
  plugins: [],
}

