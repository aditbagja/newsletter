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
      screens:{
        '2xl': '1440px',
        '3xl': '1920px',
        'xs': '375px',
        '4k': '2560px'
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
        'marquee-xs': 'marquee-xs 20s linear infinite',
        'marquee2-xs': 'marquee2-xs 20s linear infinite',
        'marquee-sm': 'marquee-sm 20s linear infinite',
        'marquee2-sm': 'marquee2-sm 20s linear infinite',
        'marquee-md': 'marquee-md 20s linear infinite',
        'marquee2-md': 'marquee2-md 20s linear infinite',
        'marquee-lg': 'marquee-lg 20s linear infinite',
        'marquee2-lg': 'marquee2-lg 20s linear infinite',
        'marquee-2xl': 'marquee-2xl 20s linear infinite',
        'marquee2-2xl': 'marquee2-2xl 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-530%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(530%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-xs': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-370%)' },
        },
        'marquee2-xs': {
          '0%': { transform: 'translateX(370%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-sm': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-400%)' },
        },
        'marquee2-sm': {
          '0%': { transform: 'translateX(400%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-md': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-220%)' },
        },
        'marquee2-md': {
          '0%': { transform: 'translateX(220%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-lg': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-180%)' },
        },
        'marquee2-lg': {
          '0%': { transform: 'translateX(180%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-2xl': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-130%)' },
        },
        'marquee2-2xl': {
          '0%': { transform: 'translateX(130%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}

