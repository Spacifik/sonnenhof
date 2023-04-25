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
      maxHeight: {
        '90vh': '90vh'
      },
      minHeight: {
        '30vh': '30vh',
        '40vh': '40vh',
        '60vh': '60vh'
      }
    },
  },
  plugins: [],
}
