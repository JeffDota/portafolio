/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./dist/**/*.{html,js}'], // estoy diciendo que se ejecute el html
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary:'#0f172a',  // color primario
      },
      fontFamily:{
        roboto:['Roboto', ...defaultTheme.fontFamily.sans] // fuente de letra por si no lo tiene
      }
    },
  },
  plugins: [],
}

