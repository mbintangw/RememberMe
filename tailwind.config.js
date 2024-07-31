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
        'background': '#232946',
        'headline' : '#fffffe',
        'paragraph': '#b8c1ec',
        'button' : '#eebbc3',
        'buttontext' : '#232946',
        'stroke' : '#121629',
        'highlight' : '#eebbc3',
        'secondary' : '#fffffe',
        'tertiary' : '#eebbc3',
      }
    },
  },
  plugins: [],
}