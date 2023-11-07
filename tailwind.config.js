const defaultTheme = require('tailwindcss/defaultTheme');
const daisyuiPlugin = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [daisyuiPlugin],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', ...defaultTheme.fontFamily.sans],
      },
      fontWeigth: {
        'extra-bold': '800',
      },
      container: {
        center: true,
      },
    },
  },
};
