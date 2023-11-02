const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require('daisyui')],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Manrope"', ...defaultTheme.fontFamily.sans],
            },
            fontWeigth: {
                'extra-bold': '800',
            },
            container: {
                center: true,
            },
        },
    }
};