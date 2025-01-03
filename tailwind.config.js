/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        quicksand : ['Quicksand', 'sans-serif'],
        dosis: ["Dosis", "sans-serif"],
        quattrocentro: ['Quattrocentro', 'sans-serif']
      },
    },
  },
  plugins: [],
}

