/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-pink': 'var(--theme-pink)',
        'theme-orange': 'var(--theme-orange)',
        'theme-bg': 'var(--theme-bg)',
        'theme-text': 'var(--theme-text)',
        'card-bg': 'var(--card-bg)',
        'glass-bg': 'var(--glass-bg)',
        'glass-border': 'var(--glass-border)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(248, 200, 220, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(201, 228, 246, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
