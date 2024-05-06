/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'space-grotesk-400': ['Space-Grotesk-400', 'sans-serif'],
                'space-grotesk-500': ['Space-Grotesk-500', 'sans-serif'],
                'space-grotesk-700': ['Space-Grotesk-700', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
};
