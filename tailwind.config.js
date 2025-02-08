/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#1A1A1A',
        brand: {
          'gray-100': '#E0E0E0',
        }
      },
      spacing: {
        15: '0.9375rem',
        30: '1.875rem',
        70: '4.375rem',
        100: '6.25rem',
        520: '32.5rem',
        base: '75rem',
      }
    },
  },
  plugins: [],
}

