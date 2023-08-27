import * as prismic from '@prismicio/client'

export const prismicRepoURL = 'https://f5software.cdn.prismic.io/api/v2'

export const client = prismic.createClient(prismicRepoURL, {
  accessToken: '',
  routes: [
    {
      type: 'home',
      path: '/',
    },
    {
      type: 'servicesection',
      path: '/',
    },
    {
      type: 'portifolioheader',
      path: '/',
    },
    {
      type: 'portifoliocards',
      path: '/',
    },
  ],
})
