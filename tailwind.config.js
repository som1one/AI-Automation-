/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark theme - Unique purple/blue gradient
        background: {
          DEFAULT: '#0a0a0f',
          secondary: '#0f0f1a',
          tertiary: '#151520',
        },
        foreground: {
          DEFAULT: '#ffffff',
          secondary: '#a0a0b0',
          muted: '#6a6a7a',
        },
        primary: {
          DEFAULT: '#8b5cf6', // Vibrant purple
          foreground: '#ffffff',
          hover: '#9d6df7',
          light: '#a78bfa',
        },
        secondary: {
          DEFAULT: '#3b82f6', // Bright blue
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#ec4899', // Pink accent
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#1a1a25',
          foreground: '#a0a0b0',
        },
        border: {
          DEFAULT: '#252535',
          hover: '#353545',
        },
        card: {
          DEFAULT: '#141420',
          hover: '#1e1e2e',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-lg': '0 0 40px rgba(139, 92, 246, 0.5)',
        'glow-accent': '0 0 20px rgba(236, 72, 153, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
