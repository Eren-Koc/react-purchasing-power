/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'app-white':'#FFF',
      'app-dark':'#333333',
      'app-light':'#e0e0e0',
      'app-black':'#000000',
      'app-pink':'#8800ff',
      'app-purple':'#5a4fae',
      'app-transparent':'transparent',
      'app-gray':'#b3b2b1',

    },
  },
  plugins: [],
}

