/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'bg-primary': '#000000',
        'bg-secondary': '#252525',

        'text-primary':'#FFFFFF',
        'text-secondary':'#DDDDDD'

        
      },
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
