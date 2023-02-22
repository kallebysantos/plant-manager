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
        green: {
          100: '#DAF2E4',
          500: '#32B768',
          700: '#2B7A4B',
        },
      },
      fontFamily: {
        heading: ['Jost-SemiBold'],
        body: ['Jost-Regular'],
      },
    },
  },
  plugins: [],
};
