/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"],
  theme: {
    extend: {
      colors: {
        backGround:'#1A1825',
        contour: '#001A6C',
        primary:'#042028',
        primaryText: '#BE5A04',
        contourText: '#5A3A24'
    },
    fontFamily:{
        
    }
  },
  },
  plugins: [],
}
