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
          DEFAULT: '#10B981', // Emerald 500
          dark: '#059669', // Emerald 600
          light: '#34D399', // Emerald 400
        },
        secondary: {
          DEFAULT: '#1E293B', // Slate 800
          dark: '#0F172A', // Slate 900
          light: '#334155', // Slate 700
        },
        accent: {
          DEFAULT: '#8B5CF6', // Violet 500
          hover: '#7C3AED', // Violet 600
        },
        background: '#0f172a', // Slate 900 (Global bg)
        surface: '#1e293b', // Slate 800 (Cards/Surfaces)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
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