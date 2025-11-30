/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': 'var(--color-soft-pink)',
        'deep-red': 'var(--color-deep-red)',
        'coral-pink': 'var(--color-coral-pink)',
        'deep-olive': 'var(--color-deep-olive)',
        'warm-olive': 'var(--color-warm-olive)',
        'beige': 'var(--color-beige)',
        'purple': '#9333ea', // Bright purple for borders
      },
      fontFamily: {
        sans: ['var(--font-josefin)', 'sans-serif'],
        serif: ['var(--font-suranna)', 'serif'],
        heading: ['var(--font-suranna)', 'serif'],
      },
      fontWeight: {
        thin: '300',
        normal: '400',
        semibold: '600',
      },
      borderRadius: {
        'card': '30px',
        'tile': '40px',
      },
    },
  },
  plugins: [],
}

