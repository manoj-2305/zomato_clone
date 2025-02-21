/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        zomato: {
          50: '#ffe5e7',
          100: '#fab5b9',
          200: '#f9848b',
          300: '#f9525d',
          400: '#f92330',
          500: '#e01d19',
          600: '#ae1614',
          700: '#7c100f',
          800: '#4a0909',
          900: '#1a0303',
        },
        restaurant: {
          50: '#fff8e5',
          100: '#ffebb3',
          200: '#ffdd80',
          300: '#ffcf4d',
          400: '#ffc11a',
          500: '#e6a600',
          600: '#b38200',
          700: '#805d00',
          800: '#4d3800',
          900: '#1a1300',
        }
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.12)',
        'hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
      }
    },
  },
  plugins: [],
}