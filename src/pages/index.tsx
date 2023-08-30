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
import { PortifolioData } from '@/types/portifolio'
import { AboutData } from '@/types/about'

type Repo = {
  banner: BannerData
  service: ServiceData
  portifolio: PortifolioData
  about: AboutData
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
        <Portifolio data={data.portifolio} />
        <About data={data.about} />
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  data: Repo
}> = async () => {
  const [
    bannerResponse,
    globalResponse,
    serviceResponse,
    portifolioStaticResponse,
    portifolioDinamicResponse,
    aboutResponse,
  ] = await Promise.all([
    client.getSingle('home'),
    client.getSingle('global'),
    client.getSingle('servicesection'),
    client.getSingle('portifolioheader'),
    client.getAllByType('portifoliocards'),
    client.getSingle('contact'),
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

  const cards = portifolioDinamicResponse.map((res) => {
    return {
      image: {
        url: res.data.portifolio_image.url,
        alt: res.data.portifolio_image.alt,
      },
      title: res.data.portifolio_card_title,
      text: res.data.portifolio_card_text,
    }
  })

  const portifolio: PortifolioData = {
    title: portifolioStaticResponse.data.portifoliotitle,
    cards,
  }

  const about: AboutData = {
    title: aboutResponse.data.section_title,
    info: {
      objective: {
        title: aboutResponse.data.objective_title,
        text: aboutResponse.data.objective_text,
      },
      public: {
        title: aboutResponse.data.public_title,
        text: aboutResponse.data.public_text,
      },
      target: {
        title: aboutResponse.data.region_target_title,
        text: aboutResponse.data.region_target_text,
      },
    },
    contact: {
      title: aboutResponse.data.contact_card_title,
      text: aboutResponse.data.contact_card_text,
      whatsapp: globalResponse.data.whatsapp,
      email: globalResponse.data.email,
    },
    social: {
      title: aboutResponse.data.social_card_title,
      text: aboutResponse.data.social_card_text,
      url: globalResponse.data.social_link,
    },
  }

  return {
    props: {
      data: {
        banner,
        service,
        portifolio,
        about,
      },
    },
  }
}
