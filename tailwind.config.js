/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0a0a0a',
          raised: '#111111',
          overlay: '#1a1a1a',
          border: '#222222',
        },
        danger: {
          DEFAULT: '#dc2626',
          dim: '#991b1b',
          glow: 'rgba(220, 38, 38, 0.15)',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a3a3a3',
          muted: '#6b6b6b',
        },
        green: {
          DEFAULT: '#22c55e',
          dim: '#166534',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'ticker': 'ticker 60s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
