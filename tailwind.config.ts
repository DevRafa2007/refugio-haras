import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A4B5A0',
        earth: {
          light: '#D2C5B8',
          medium: '#B8A99C',
          dark: '#8C7B6E',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      backgroundImage: {
        'gradient-sky': 'linear-gradient(180deg, #87CEEB 0%, #FFC0CB 100%)',
      },
    },
  },
  plugins: [],
}

export default config 