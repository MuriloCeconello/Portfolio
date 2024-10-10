/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Salsa': ['Salsa', 'serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Chakra': ['Chakra Petch', 'sans-serif']
      }
    },
    colors:{
      'color1': '#435585',
      'color2': '#363062',
      'card-color': '#4e6299',
      'font-color-dark': 'rgb(186 199 235)',
      'black': '#000000',
      'white': '#ffffff',
      'grey' : '#9997A6'
    }
  },
  plugins: [],
}