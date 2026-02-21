/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          elevated: '#111111',
          border: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#455CE9',
          glow: 'rgba(69, 92, 233, 0.125)',
        },
        muted: '#737373',
      },
      fontFamily: {
        'space-grotesk': ['Space-Grotesk-400', 'sans-serif'],
        'space-grotesk-500': ['Space-Grotesk-500', 'sans-serif'],
        'space-grotesk-700': ['Space-Grotesk-700', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 8vw, 7.5rem)',
        'section': 'clamp(2rem, 5vw, 4rem)',
        'body-lg': 'clamp(1rem, 1.5vw, 1.25rem)',
      },
    },
  },
  variants: {},
  plugins: [],
};
