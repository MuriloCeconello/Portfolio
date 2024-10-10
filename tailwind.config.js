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
      'color1': '#27538c',
      'color2': '#3470bf',
      'black': '#000000',
      'white': '#ffffff'
    }
  },
  plugins: [],
}