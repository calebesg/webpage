import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    backgroundImage: {
      banner: "url('/img/banner.jpg')",
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      'gradient-to-t': 'linear-gradient(0deg, #131313, #ffffff00)',
      'gradient-to-r':
        'linear-gradient(90deg, #27272a, #27272a, #27272a, #ffffff00)',
      'gradient-to-b':
        'linear-gradient(180deg, #27272a, #27272a, #27272a, #ffffff00)',
      'gradient-to-bm':
        'linear-gradient(180deg, #27272a, #27272a, #27272a, #27272a, #ffffff00)',
      'gradient-instagram':
        'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
    },
    fontFamily: {
      sans: ['Inter', 'sans'],
      Poppins: ['Poppins', 'Inter', 'sans'],
    },
    extend: {
      animation: {
        'show-menu': 'show-menu 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
export default config
