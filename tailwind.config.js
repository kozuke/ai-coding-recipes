/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // Enable dark mode based on system preference
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
            color: '#d1d5db', // Light gray for dark mode text
            a: {
              color: '#60a5fa', // Lighter blue for dark mode links
              '&:hover': {
                color: '#93c5fd',
              },
            },
            h1: {
              color: '#f3f4f6',
              fontWeight: '700',
            },
            h2: {
              color: '#f3f4f6',
              fontWeight: '600',
            },
            h3: {
              color: '#f3f4f6',
              fontWeight: '600',
            },
            code: {
              color: '#e5e7eb',
              backgroundColor: '#374151',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#e5e7eb',
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
