import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useSinglePrismicDocument } from '@prismicio/react'

import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Banner } from '@/components/Banner'
import { Service } from '@/components/Service'
import { Portifolio } from '@/components/Portifolio'
import { About } from '@/components/About'

import { BannerData } from '@/types/banner'
import { client } from '@/libs/prismic'
import { ServiceData } from '@/types/service'
import { text } from 'stream/consumers'

type Repo = {
  banner: BannerData
  service: ServiceData
}

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
        <Banner data={data.banner} />
        <Service data={data.service} />
        {/* <Portifolio /> */}
        {/* <About /> */}
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  data: Repo
}> = async () => {
  const [bannerResponse, globalResponse, serviceResponse] = await Promise.all([
    client.getSingle('home'),
    client.getSingle('global'),
    client.getSingle('servicesection'),
  ])

  const banner: BannerData = {
    title: bannerResponse.data.bannertitle,
    text: bannerResponse.data.bannertext,
    imageBanner: bannerResponse.data.bannerimage,
    whatsapp: globalResponse.data.whatsapp,
  }

  const service: ServiceData = {
    title: serviceResponse.data.servicetitle,
    text: serviceResponse.data.servicetext,
    card1: {
      title: serviceResponse.data.service_card1_title,
      text: serviceResponse.data.service_card1_text,
    },
    card2: {
      title: serviceResponse.data.service_card2_title,
      text: serviceResponse.data.service_card2_text,
    },
    card3: {
      title: serviceResponse.data.service_card3_title,
      text: serviceResponse.data.service_card3_text,
    },
  }

  const emptyBanner = {
    imageBanner: { alt: '', url: '' },
    text: '',
    title: '',
    whatsapp: 0,
  }

  const emptyService = {
    card1: {
      text: '',
      title: '',
    },
    card2: {
      text: '',
      title: '',
    },
    card3: {
      text: '',
      title: '',
    },
    text: '',
    title: '',
  }

  return {
    props: {
      data: {
        banner,
        service,
      },
    },
  }
}
