/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '15': ['0.9375rem', '1.125rem'],
      },
      colors: {
        dark: '#1A1A1A',
        secondary: '#343434',
        brand: {
          'gray-100': '#E0E0E0',
          'gray-800': '#3E3E3E',
          'yellow-400': '#EECB6D',
          'yellow-600': '#C59D3E',
        }
      },
      spacing: {
        15: '0.9375rem',
        30: '1.875rem',
        70: '4.375rem',
        100: '6.25rem',
        520: '32.5rem',
        base: '86.5rem',
      }
    },
  },
  plugins: [],
}

