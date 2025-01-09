/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'zendscyan': `#087E8D`,
        'colorTxt': `#ffffff`,
        'colorTitle': `cyan`,
        
      },
    },
  },
  fontFamily: {
    'pop': ['Poppins', 'sans-serif'],
  },
  plugins: [],
}

