/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDFE',
          100: '#FFF9FC',
          200: '#FAF4F8',
          300: '#F3EAF1',
          400: '#E9DDE6',
        },
        blush: {
          50: '#FFF0F3',
          100: '#FFE2E8',
          200: '#FFC2D1',
          300: '#FFB3C6',
          400: '#FF8FAB', // Core calm pink
          500: '#FB6F92', // Deeper cute pink
          600: '#E0537A',
          700: '#C23A61',
          800: '#9E2A4D',
          900: '#852140',
        },
        lavender: {
          50: '#FDFBFF',
          100: '#F4F1FA',
          200: '#E6E0F8',
          300: '#D6CEF3',
          400: '#CDB4DB', // Core lavender
          500: '#BCA0D3',
          600: '#9A7AB5',
          700: '#7B5E93',
          800: '#5E4671',
          900: '#463355',
        },
        plum: {
          primary: '#2D2232',
          secondary: '#695D6E',
          muted: '#968A9B',
          deep: '#1F1623',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(45, 34, 50, 0.03), 0 1px 3px rgba(45, 34, 50, 0.02)',
        'soft': '0 8px 25px -4px rgba(45, 34, 50, 0.06), 0 2px 6px rgba(45, 34, 50, 0.03)',
        'elevated': '0 16px 40px -8px rgba(45, 34, 50, 0.08), 0 4px 12px rgba(45, 34, 50, 0.04)',
        'glow-pink': '0 0 40px -8px rgba(255, 143, 171, 0.45)',
        'glow-lavender': '0 0 40px -8px rgba(205, 180, 219, 0.45)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
}
