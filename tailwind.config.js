/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // OSの設定に従ってダークモードを適用
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
