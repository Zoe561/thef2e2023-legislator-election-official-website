/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: true, // 每次編譯都觀測(若沒寫預設false則只會在正式機時才會偵測)
  content: ["./src/**/*.{html,ts}",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        gray: {
          100: '#E2E2E2',
          200: '#c6c6c6',
          300: '#8c8c8c',
          400: '#444444',
          500: '#000000'
        },
        primary: {
          100: '#FBFFE1',
          200: '#EEFFA9',
          300: '#D1FA31',
          400: '#BBE217',
          500: '#A8C400',
        }
      },
      fontSize: {
        body: ['16px', {
          fontWeight: '500',
        }],
        subtitle: ['20px', {
          fontWeight: '500',
        }],
        title: ['24px', {
          fontWeight: '700',
        }],
        lgTitle: ['28px', {
          fontWeight: '700',
        }],
        display: ['48px', {
          fontWeight: '700',
        }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '48px',
        xxl: '64px'
      }
    },
  },
  plugins: [],
}

