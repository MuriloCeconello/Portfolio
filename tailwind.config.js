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
      'color1': 'rgb(67 85 133)',
      'color2': 'rgb(54 48 98)',
      'font-color-dark': 'rgb(186 199 235)',
      'black': '#000000',
      'white': '#ffffff',
      'grey' : '#9997A6'
    }
  },
  plugins: [],
}