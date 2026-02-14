/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Operis - Black theme
        background: {
          DEFAULT: '#000000', // Pure black
          secondary: '#0a0a0a', // Very dark gray (almost black)
          tertiary: '#111111', // Dark gray
        },
        foreground: {
          DEFAULT: '#f0f0f0', // Light text
          secondary: '#8b949e', // Muted text
          muted: '#6e7681', // Very muted
        },
        primary: {
          DEFAULT: '#6b7fd7', // Cold steel blue (accent color)
          foreground: '#ffffff',
          hover: '#7a8de0',
          light: '#8b9ce8',
        },
        secondary: {
          DEFAULT: '#4a5568', // Neutral gray
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#6b7fd7', // Same as primary for consistency
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#0a0a0a',
          foreground: '#8b949e',
        },
        border: {
          DEFAULT: '#1a1a1a', // Very subtle border (dark gray)
          hover: '#2a2a2a',
        },
        card: {
          DEFAULT: '#0a0a0a',
          hover: '#111111',
        },
        destructive: {
          DEFAULT: '#f85149',
          foreground: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Strict grotesque
        display: ['Inter', 'system-ui', 'sans-serif'], // Same for consistency
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
        'glow': '0 0 20px rgba(107, 127, 215, 0.2)',
        'glow-lg': '0 0 40px rgba(107, 127, 215, 0.3)',
        'glow-accent': '0 0 20px rgba(107, 127, 215, 0.2)',
      },
      spacing: {
        'section': '8rem', // Large section spacing
        'section-sm': '6rem',
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
