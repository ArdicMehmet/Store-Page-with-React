/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': 'Manrope',
      },
      container:{
        center: true,
      },
      transitionDuration:{
        2000: '2000ms',
      }
    }
  },
  plugins: [],
}

