/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#447241',
          50: '#eef5ee',
          100: '#dcebdd',
          200: '#bcd7bb',
          300: '#8fb98d',
          400: '#629a60',
          500: '#447241',
          600: '#375a35',
          700: '#2c472a',
          800: '#263a25',
          900: '#213120',
        }
      }
    },
  },
  plugins: [],
}