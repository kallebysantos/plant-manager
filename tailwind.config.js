const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#EBF6FF',
          300: '#3D7199',
        },
        red: {
          500: '#E83F5B',
        },
        gray: {
          600: '#52665A',
        },
        green: {
          100: '#DAF2E4',
          500: '#32B768',
          700: '#2B7A4B',
        },
      },
      textColor: {
        emoji: colors.black,
      },
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
    },
    fontFamily: ['Jost', 'sans-serif'],
  },
  plugins: [],
};
