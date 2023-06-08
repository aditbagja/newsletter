/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily:{
        anton: ['Anton', ...defaultTheme.fontFamily.serif],
      },
      colors:{
        primary: '#eb3f33',
        background: '#f3f3f3'
      },
    },
  },
  variants: {},
  plugins: [],
}

