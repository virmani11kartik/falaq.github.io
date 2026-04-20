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
        cream: '#FDFAF6',
        ivory: '#FAF8F5',
        sand: '#EDE8E0',
        taupe: '#B5A99A',
        charcoal: '#1E1E1E',
        midnight: '#111111',
        rose: '#C9987D',
        gold: '#C9A96E',
        'warm-gray': '#6B6460',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Karla', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'extra-wide': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.9s ease-out both',
        'slide-up': 'slideUp 0.9s ease-out both',
        'scale-in': 'scaleIn 0.7s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(32px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.97)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
