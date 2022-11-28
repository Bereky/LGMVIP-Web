/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bDark: '#404258',
        bLightDark: '#474E68',
        bLight: '#50577A',
        bSuperLight: '#6B728E',
        textLight: '#EFF5F5',
        bgLight: '#EFF5F5'
      }
    },
  },
  plugins: [],
}