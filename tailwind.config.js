/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        zomato : {
            btnpink: '#e23744',
            bgLightGreen: '#e5f3f3',
            bgLightBlue: '#edf4ff',
            bgLightYellow: '#fceec0',
            bgTransparent: '#f8f8f8',
            bgdarkGray: '#1a1a1a',
            classicBg: '#EBEBEB',
            fontGray: '#696969',
            lightGrayBg: '#f8f8f8',
            900: '#0d0d0d',
        }
      }
     
    },
  },
  plugins: [],
}
