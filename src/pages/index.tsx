import Head from 'next/head'

import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Banner } from '@/components/Banner'
import { Service } from '@/components/Service'
import { Portifolio } from '@/components/Portifolio'
import { About } from '@/components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>F5 - Feito para você</title>
        <meta name="description" content="Levando seu comércio para Internet" />
        <meta name="autor" content="F5" />
        <meta
          name="keywords"
          content="Marketing Digital, Trafego Pago, Anuncio, Landing Page, Video Maker, Design Grafico"
        />
      </Head>

      <Header />

      <main id="main" className="font-sans">
        <Banner />
        <Service />
        <Portifolio />
        <About />
      </main>

      <Footer />
    </>
  )
}
