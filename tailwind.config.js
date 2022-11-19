/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      'body': ['"font-serif"']
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#6101EE',
        'secondary': '#00DAC6',
        'background': '#eeeeee',
        'dark-background': '#000000',
      },
    },
  },
  plugins: [require("daisyui")],
}
