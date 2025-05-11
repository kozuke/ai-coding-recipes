/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h1: {
              color: '#1a202c',
              fontWeight: '700',
            },
            h2: {
              color: '#1a202c',
              fontWeight: '600',
            },
            h3: {
              color: '#1a202c',
              fontWeight: '600',
            },
            code: {
              color: '#24292e',
              backgroundColor: '#f7fafc',
            },
            pre: {
              backgroundColor: '#f7fafc',
              color: '#24292e',
            },
          },
        },
        dark: {
          css: {
            color: '#e1e1e1',
            a: {
              color: '#63b3ed',
              '&:hover': {
                color: '#90cdf4',
              },
            },
            h1: {
              color: '#f7fafc',
              fontWeight: '700',
            },
            h2: {
              color: '#f7fafc',
              fontWeight: '600',
            },
            h3: {
              color: '#f7fafc',
              fontWeight: '600',
            },
            code: {
              color: '#e2e8f0',
              backgroundColor: '#2d3748',
            },
            pre: {
              backgroundColor: '#2d3748',
              color: '#e2e8f0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
