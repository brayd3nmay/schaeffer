import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#29506D',
        'bright-silver': '#C0C0C0',
        'safety-yellow': '#FFD100',
        primary: '#29506D',
        secondary: '#C0C0C0',
        accent: '#FFD100',
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [typography],
};
export default config;
