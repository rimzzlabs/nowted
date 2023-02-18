/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Source Sans Pro', ...fontFamily.sans],
        title: [`"Kaushan Script", cursive`]
      },
      colors: {
        accent: {
          1: '#181818',
          2: '#1C1C1C',
          3: '#232323',
          4: '#323232'
        },
        text: {
          1: '#FFF',
          2: '#a7a7a7'
        }
      }
    }
  },
  plugins: []
}
