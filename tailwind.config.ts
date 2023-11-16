import type { Config } from 'tailwindcss'
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors:{
        pinky: {DEFAULT: '#F05768',100: '#FEEFF0', 300:'#FBCDD2'}
      },
      fontFamily: {
        libre: ['var(--libre-caslon-text)','Libre Caslon Text','serif'],
        happy: ['var(--happy-type-faces)','HappyTypeFaces', 'cursive'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '25%, 75%': { transform: 'translateX(4px)' },
          '50%': { transform: 'translateX(-4px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out 2',
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-out': 'fadeOut 1s ease-out forwards',
      }
    },
    gridTemplateColumns: {
      // Simple 16 column grid
      '4': 'repeat(4, minmax(0, 1fr))',
      '24': 'repeat(24, minmax(0, 1fr))',
      '87': 'repeat(87, minmax(0, 1fr))',
    },
    gridColumn: {
      'span-1': 'span 1 / span 24',
      'span-2': 'span 2 / span 24',
      'span-3': 'span 3 / span 24',
      'span-4': 'span 4 / span 24',
      'span-5': 'span 5 / span 24',
      'span-6': 'span 6 / span 24',
      'span-7': 'span 7 / span 24',
      'span-8': 'span 8 / span 24',
      'span-9': 'span 9 / span 24',
      'span-10': 'span 10 / span 24',
      'span-11': 'span 11 / span 24',
      'span-12': 'span 12 / span 24',
      'span-13': 'span 13 / span 24',
      'span-14': 'span 14 / span 24',
      'span-15': 'span 15 / span 24',
      'span-16': 'span 16 / span 24',
      'span-17': 'span 17 / span 24',
      'span-18': 'span 18 / span 24',
      'span-19': 'span 19 / span 24',
      'span-20': 'span 20 / span 24',
      'span-21': 'span 21 / span 24',
      'span-22': 'span 22 / span 24',
      'span-23': 'span 23 / span 24',
      'span-24': 'span 24 / span 24',
    }
  },
  plugins: [],
}
export default config


/*       'main': '#e002a2' */