import type { AppProps } from 'next/app'
import { Providers } from '@/providers'

import '@/styles/globals.css'
import 'keen-slider/keen-slider.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
