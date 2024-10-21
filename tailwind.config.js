/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sage': '#8A9A5B',
        'cream': '#F0EAD6',
        'caramel': '#C68E17',
        'mustard': '#FFDB58',
        'coffee': '#6F4E37',
        'forest': '#2C3E2D',
      },
      fontFamily: {
        'dreaming': ['"Dreaming Out Script"', 'cursive'],
        'noto': ['"Noto Sans"', 'sans-serif'],
        'open': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};