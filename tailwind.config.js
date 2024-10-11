/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Salsa': ['Salsa', 'serif'],
      'Poppins': ['Poppins', 'sans-serif'],
      'Chakra': ['Chakra Petch', 'sans-serif']
    },

    colors: {
      lightmode: {
        'background-default': '#80C7F2',
        'background-color-2': '#A7D5F2',
        'card-color': '#A7DDF2',
        'font-color': '#3C5159',
      },
      darkmode: {
        'background-default': '#435585',
        'background-color-2': '#363062',
        'card-color': '#4e6299',
        'font-color': 'rgb(186 199 235)',
      },
      default: {
        'black': '#000000',
        'white': '#F2F2F2',
        'grey': '#9997A6'
      }
    }
  },
  plugins: [],
}