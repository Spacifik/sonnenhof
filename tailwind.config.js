/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/overlay/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          regular: "#d0af31",
          light: "#e5c245"
        }
      },
      fontSize: {
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      height: {
        "25vh": "25vh"
      },
      maxHeight: {
        '75vh': '75vh',
        '90vh': '90vh'
      },
      minHeight: {
        '15vh': '15vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '60vh': '60vh'
      },
      screens: {
        "xl": "1500px",
        "2xl": "1700px",
        "3xl": "1900px"
      }
    },
  },
  plugins: [],
}
