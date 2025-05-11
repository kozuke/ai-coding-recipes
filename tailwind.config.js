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
        invert: {
          css: {
            color: '#d1d5db', // gray-300
            a: {
              color: '#60a5fa', // blue-400
              '&:hover': {
                color: '#93c5fd', // blue-300
              },
            },
            h1: {
              color: '#f3f4f6', // gray-100
              fontWeight: '700',
            },
            h2: {
              color: '#f3f4f6', // gray-100
              fontWeight: '600',
            },
            h3: {
              color: '#f3f4f6', // gray-100
              fontWeight: '600',
            },
            strong: {
              color: '#f3f4f6', // gray-100
            },
            code: {
              color: '#e5e7eb', // gray-200
              backgroundColor: '#374151', // gray-700
            },
            pre: {
              backgroundColor: '#1f2937', // gray-800
              color: '#e5e7eb', // gray-200
              borderColor: '#4b5563', // gray-600
            },
            blockquote: {
              color: '#d1d5db', // gray-300
              borderLeftColor: '#4b5563', // gray-600
            },
            ul: {
              li: {
                '&::marker': {
                  color: '#60a5fa', // blue-400
                  fontSize: '1.25em',
                  fontWeight: '700',
                },
              },
            },
            ol: {
              li: {
                '&::marker': {
                  color: '#60a5fa', // blue-400
                  fontWeight: '700',
                },
              },
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
