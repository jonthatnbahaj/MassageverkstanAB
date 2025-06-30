/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#2D5A4F',      // Deep forest green
          secondary: '#4A7C59',    // Medium sage green
          accent: '#8FBC8F',       // Soft sage green
          gold: '#D4AF37',         // Warm gold accent
          goldColor: '#F4D03F',    // Bright gold
          dark: '#1B3B36',         // Dark forest
          lightGold: '#F0E6D2'     // Cream/light gold
        }
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
      },
      aspectRatio: {
        '2/1': '2 / 1',
      }
    },
  },
  plugins: [],
};