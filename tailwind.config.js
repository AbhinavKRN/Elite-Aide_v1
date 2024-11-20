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
          light: '#60A5FA',   // Blue-400
        },
        secondary: {
          DEFAULT: '#1F2937', // Gray-800
          dark: '#111827',    // Gray-900
          light: '#374151',   // Gray-700
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'hero': ['60.63px', {
          lineHeight: '71.18px',
          fontWeight: '900',
        }],
        'display': ['45px', {
          lineHeight: '50px',
          fontWeight: '900',
        }],
        'mobile-hero': ['32px', {
          lineHeight: '40px',
          fontWeight: '900',
        }],
        // New responsive text sizes
        'mobile-base': ['14px', {
          lineHeight: '20px',
        }],
        'mobile-lg': ['16px', {
          lineHeight: '24px',
        }],
        'mobile-xl': ['18px', {
          lineHeight: '28px',
        }],
      },
      width: {
        'hero': '959.38px',
        'container': '1280px',
        'mobile-container': '100%',
        'mobile-hero': '100%',
      },
      maxWidth: {
        'container': '1280px',
        'content': '570px',
        'mobile-content': '100%',
        'mobile-image': '90vw',
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        // Mobile-specific spacing
        'mobile-padding': '1rem',
        'mobile-section': '2rem',
        'mobile-gap': '1rem',
      },
      animation: {
        shine: 'shine 1.5s ease-in-out infinite',
        'smooth-bounce': 'smooth-bounce 2s cubic-bezier(0.75, 0.75, 0.75, 0.75) 2',
        'circle-pop': 'circlePop 4.5s cubic-bezier(0.75, 0.75, 0.75, 0.75) infinite forwards',
        'circle-pulse': 'circlePulse 2s ease-in-out infinite',
        'border-flow': 'border-flow 3s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        // Mobile animations
        'mobile-menu': 'mobileMenu 0.3s ease-out',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
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
        },
        'border-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        // New mobile menu animation
        mobileMenu: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      // New responsive utilities
      height: {
        'mobile-nav': '64px',
        'mobile-hero': 'calc(100vh - 64px)',
      },
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [
    // Add plugin for handling safe areas on mobile devices
    function({ addUtilities }) {
      const newUtilities = {
        '.safe-padding': {
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}