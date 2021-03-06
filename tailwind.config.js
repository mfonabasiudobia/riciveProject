module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    colors: {
      'white': '#fff',
      'black': '#000000',
      'cvArea': '#EAF5D7',
      'gray': {
        100: '#8A8A8A',
        300: '#F0F0F0',
        500: '#18191F',
        200: '#D9DBE1',
        400: '#FBFBFB'
      },
      'green': {
        100: '#4E903C',
        200: '#91CE33',
        400: '#128061',
        700: '#133028',
        900: '#12362A',
        800: '#4BA87D',
        300: '#E6F9E1'
      },
      'yellow': {
        900: '#F9A31B',
      }
         }
    },
  },
  plugins: [],
}
