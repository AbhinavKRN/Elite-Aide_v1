/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue-500
          dark: '#2563EB',    // Blue-600
        },
        secondary: {
          DEFAULT: '#1F2937', // Gray-800
          dark: '#111827',    // Gray-900
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        shine: 'shine 1.5s ease-in-out infinite',
        'smooth-bounce': 'smooth-bounce 2s cubic-bezier(0.75, 0.75, 0.75, 0.75) 2',
        'circle-pop': 'circlePop 2.5s cubic-bezier(0.75, 0.75, 0.75, 0.75) forwards',
        'circle-pulse': 'circlePulse 2s ease-in-out infinite'
      },
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        },
        'smooth-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '75%': { transform: 'translateY(-10px)' },
          '85%': { transform: 'translateY(-5px)' },
          '95%': { transform: 'translateY(-2px)' }
        },
        circlePop: {
          '0%': { 
            transform: 'scale(0.3) translateY(100px)',
            opacity: '0'
          },
          '50%': {
            transform: 'scale(1.1) translateY(0)',
          },
          '75%': {
            transform: 'scale(0.95) translateY(0)',
          },
          '100%': { 
            transform: 'scale(1) translateY(0)',
            opacity: '1'
          }
        },
        circlePulse: {
          '0%, 100%': {
            opacity: '0.6',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)'
          }
        }
      }
    },
  },
  plugins: [],
}