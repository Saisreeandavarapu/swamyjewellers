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
          light: '#FFF0F3', // Very light baby pink
          DEFAULT: '#FADADD', // Classical Baby Pink
          dark: '#F4B6C2', // Slightly deeper but still soft pink
          vibrant: '#F8A1B5', // For CTA or highlights
        },
        secondary: {
          light: '#F0F8FF',
          DEFAULT: '#E3F2FD', // Sky Blue
          dark: '#BBDEFB',
        },
        gold: {
          light: '#F4E3A4',
          DEFAULT: '#D4AF37', // Gold
          dark: '#AA8C2C',
        },
        luxury: {
          black: '#1A1A1A',
          charcoal: '#333333',
          cream: '#FAF9F6',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', '"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4E3A4 50%, #D4AF37 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite linear',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
