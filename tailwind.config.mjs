/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    // Mobile-first responsive breakpoints (Tailwind defaults + xs for small phones).
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // RAM3nergy brand palette
        primary: {
          DEFAULT: '#00411C', // Deep Emerald Green
          dark: '#002B13',
          light: '#0B5E2A',
          50: '#EAF3ED', // tinted backgrounds
          100: '#D3E7DB',
        },
        secondary: {
          DEFAULT: '#1E293B', // Slate Charcoal
          deep: '#0F172A',
        },
        accent: {
          DEFAULT: '#0EA5E9', // Electric Cyan
          dark: '#0284C7',
          soft: '#E0F2FE',
        },
        surface: '#F8FAFC', // Crisp Off-White
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: [
          '"Inter Variable"',
          'Inter',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(15 23 42 / 0.08), 0 4px 16px -2px rgb(15 23 42 / 0.08)',
        glow: '0 0 40px -8px rgb(14 165 233 / 0.45)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
