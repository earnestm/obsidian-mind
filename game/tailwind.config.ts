import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif:   ['"EB Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: {
          50:  '#f5f2ec',
          100: '#e3ddce',
          200: '#d8d2c3',
          300: '#ccc5b4',
          400: '#b8b0a0',
          500: '#7a7259',
          600: '#4a432f',
          700: '#3a3322',
          800: '#2a2415',
          900: '#1f1a0d',
          950: '#1b1911',
        },
        gold:  '#bd9530',
        brick: '#9c3b22',
      },
      animation: {
        'fade-in':  'fadeIn 0.35s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'reveal':   'reveal 0.4s ease-out',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        reveal:  { '0%': { opacity: '0', transform: 'scale(0.98)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
      },
    },
  },
  plugins: [],
};

export default config;
