/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      xss: '320px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'gilroy-bold': ['Gilroy-Bold'],
      'gilroy-semibold': ['Gilroy-Semibold'],
      'gilroy-regular': ['Gilroy-Regular'],
    },
    extend: {
      backgroundImage: {
        'landing-home': "url('/landing_home.png')",
        'landing-about-us': "url('/landing_about_us.png')",
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
}
