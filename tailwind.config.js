/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },

      colors: {
        'background': '#0f0e17',
        'headline' : '#fffffe',
        'paragraph': '#a7a9be',
        'button' : '#ff8906',
        'buttontext' : '#fffffe',
        'stroke' : 'black',
        'highlight' : '#ff8906',
        'secondary' : '#f25f4c',
        'tertiary' : '#e53170',
      }
    },
  },
  plugins: [],
}