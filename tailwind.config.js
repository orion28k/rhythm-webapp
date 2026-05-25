/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['"Bodoni 72"', '"Bodoni Moda"', 'Georgia', 'serif'],
      },
      colors: {
        navy: '#1e3a8a',
      },
    },
  },
  plugins: [],
}
