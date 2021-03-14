const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                teal: colors.teal
            }
        },
        container: {
            center: true,
            padding: '2rem'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
