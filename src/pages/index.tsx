import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import {
  TrendUp,
  Browsers,
  Megaphone,
  CaretLeft,
  CaretRight,
  Chat,
  WhatsappLogo,
  EnvelopeSimple,
  InstagramLogo,
  ArrowRight,
  ArrowLeft,
} from '@phosphor-icons/react'

import HeaderBar from '@/components/HeaderBar'
import ServiceCard from '@/components/ServiceCard'
import Container from '@/components/Container'
import { ParterCard } from '@/components/PartnerCard'
import { Footer } from '@/components/Footer'

import aboutImg from '../../public/img/about.png'
import socialImg from '../../public/img/social.jpg'
import { GetStaticProps } from 'next'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDialogElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 1, spacing: 32 },
      },
      '(min-width: 600px)': {
        slides: { perView: 2, spacing: 32 },
      },
      '(min-width: 800px)': {
        slides: { perView: 3, spacing: 32 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 4, spacing: 32 },
      },
      '(min-width: 1200px)': {
        slides: { perView: 4, spacing: 32 },
      },
    },
    slides: { perView: 1, spacing: 16 },
  })

  return (
    <>
      <Head>
        <title>Tavinho</title>
      </Head>

      <HeaderBar />

      <main className="pt-20 font-sans">
        <Container>
          {/* {BANNER ==================================================} */}
          <div className="w-full relative flex items-center justify-center md:justify-start bg-banner bg-cover bg-center m-auto h-[74vh] max-h-[600px] px-6 -z-10 after:absolute after:inset-0 after:bg-gradient-to-t">
            <section className="w-full md:w-[50%] z-50">
              <h1 className="text-white font-Poppins font-bold text-4xl lg:text-5xl leading-tight text-center md:text-left">
                Levando seu comercio para o próximo{' '}
                <span className="text-green-400">Nível</span>
              </h1>

              <p className="text-zinc-300 text-lg md:pr-20 text-center mt-4 leading-8 md:text-left">
                Aqui trabalhamos em varias frentes para tornar seu emprendimento
                vísivel para o maximo de clientes
              </p>
            </section>
          </div>

          {/* {SERVIÇOS ===================================================} */}
          <span id="services"></span>
          <section className="px-6 py-14">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <strong className="uppercase text-zinc-600 font-light tracking-[6px]">
                  Serviços
                </strong>
                <h2 className="text-4xl font-Poppins font-bold text-zinc-700">
                  O que podemos fazer por você
                </h2>
              </div>
              <p className="w-full md:w-[42%] text-zinc-600 text-lg font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                est illum delectus sit, libero dolores quia unde impedit omnis
                animi praesentium eum quisquam perspiciatis aliquam et ipsa
                fugit. Eos, sed.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-10 mt-14">
              <ServiceCard
                placeholder="Trafico"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est illum"
              >
                <TrendUp className="text-green-400 mb-10" size={80} />
              </ServiceCard>
              <ServiceCard
                placeholder="Landing Page"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est illum"
              >
                <Browsers className="text-green-400 mb-10" size={80} />
              </ServiceCard>
              <ServiceCard
                placeholder="Marketing"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est illum"
              >
                <Megaphone className="text-green-400 mb-10" size={80} />
              </ServiceCard>
            </div>
          </section>

          {/* {PORTIFOLIO ======================================================} */}
          <span id="portifolio"></span>
          <section className="px-6 py-14 bg-zinc-800 mt-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <strong className="uppercase text-zinc-200 font-light tracking-[6px]">
                  <p>portifólio</p>
                </strong>
                <h2 className="text-3xl lg:text-4xl font-Poppins font-bold text-white">
                  Projetos lançados
                </h2>
              </div>
            </div>

            <div className="w-full mt-16 px-4 md:px-0 navigation-wrapper relative">
              <div ref={sliderRef as any} className="keen-slider">
                {/* {games.map(game => (
                  <GameBanner
                    key={game.id}
                    adsCount={game._count.ads}
                    bannerUrl={game.imageUrl}
                    title={game.name}
                  />
                ))} */}
                <ParterCard />
                <ParterCard />
                <ParterCard />
                <ParterCard />
                <ParterCard />
                <ParterCard />
              </div>
              {loaded && instanceRef.current && (
                <div className="flex justify-between gap-8 mt-8">
                  <button
                    className="flex items-center justify-center text-white/70 hover:text-white"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    aria-label="Voltar slide"
                  >
                    <ArrowLeft size={36} width="bold" />
                  </button>
                  <button
                    className="flex items-center justify-center text-white/70 hover:text-white"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    aria-label="Próximo slide"
                  >
                    <ArrowRight size={36} width="bold" />
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* {ABOUT ============================================================} */}
          <span id="about"></span>
          <section className="relative my-28 bg-zinc-800 w-11/12 md:w-3/4 lg:w-2/3 min-h-[30rem] m-auto lg:ml-auto lg:mr-8 py-16 rounded-lg flex flex-col lg:flex-row lg:justify-end items-center gap-14">
            <Image
              src={aboutImg}
              alt=""
              className="w-52 md:w-72 rounded-lg lg:absolute lg:left-0 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2"
            />

            <main className="lg:self-center lg:w-2/3 px-10">
              <h2 className="text-white text-2xl lg:text-4xl text-center lg:text-left  font-Poppins font-bold">
                Quem Somos.
              </h2>
              <p className="text-zinc-300 md:text-lg text-center lg:text-left mt-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae consequatur consectetur harum praesentium veritatis
                incidunt itaque modi, voluptatum nobis ad quo illo deleniti sint
                ipsa placeat ex commodi vero. Ratione.
              </p>
            </main>
          </section>

          {/* {CONTATO ==========================================================} */}
          <section className="bg-gradient-to-b lg:bg-gradient-to-r mt-8 relative overflow-hidden">
            <div className="flex flex-col px-8 py-12">
              <h2 className="text-white text-2xl font-bold">
                Como nos encontrar?
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 mt-8 ">
                <div className="bg-white flex flex-col items-center justify-center rounded-lg p-8 z-50">
                  <Chat className="text-4xl text-green-400" />

                  <span className="font-Poppins font-black text-xl text-zinc-700 mt-8">
                    Fale Conosco
                  </span>
                  <span className="text-zinc-600 text-center text-sm mt-4 w-64">
                    Entre em contado e faça um orçamento já!
                  </span>

                  <ul className="w-full mt-8 flex flex-col gap-2">
                    <a
                      href="//api.whatsapp.com/send?phone=64992534500"
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsappLogo size={20} />
                      <span>(62)9920000-00</span>
                    </a>

                    <a
                      href="mailto:institutional_email@gmail.com"
                      className="flex items-center gap-2"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <EnvelopeSimple size={20} />
                      <span>institutional_email@gmail.com</span>
                    </a>
                  </ul>
                </div>

                <div className="bg-white flex flex-col items-center justify-center rounded-lg p-8 z-50">
                  <InstagramLogo className="text-5xl text-pink-500" />

                  <span className="font-Poppins font-black text-xl text-zinc-700 mt-8">
                    Instagram
                  </span>
                  <span className="text-zinc-600 text-center text-sm mt-4 w-64 ">
                    Sigua nossa página oficial e fique por dentro de todas as
                    novidades!
                  </span>

                  <button className="bg-gradient-instagram px-8 py-2 rounded-full mt-6 text-white">
                    Acesse Já
                  </button>
                </div>
              </div>
            </div>
            <Image
              src={socialImg}
              className="absolute w-full lg:w-1/2 lg:h-full bottom-0 lg:top-0 right-0 object-cover -z-10"
              alt="Telefone antigo"
            />
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60,
  }
}
