import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    backgroundImage: {
      'banner': "url('/img/banner.jpg')"
    },
    maxWidth: {
      'xxxl': "1920px"
    }
  },
  plugins: [],
}
export default config
