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
    },
    maxWidth: {
      xxxl: '1920px',
    },
    fontFamily: {
      sans: ['Inter', 'sans'],
      Poppins: ['Poppins', 'Inter', 'sans'],
    },
  },
  plugins: [],
}
export default config
