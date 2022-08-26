/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
  './src/**/*.{html,js}',
],
  theme: {
    extend: {
      colors : {
      'Cblue': '#006fba',
        'Cpurple': '#b96fae',
    },
  },
  plugins: [],
}
}
