import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import {
  TrendUp,
  Browsers,
  Megaphone,
  Chat,
  WhatsappLogo,
  EnvelopeSimple,
  InstagramLogo,
  ArrowRight,
  ArrowLeft,
  Target,
  Users,
  MapTrifold,
} from '@phosphor-icons/react'

import Header from '@/components/Header'
import ServiceCard from '@/components/ServiceCard'
import Container from '@/components/Container'
import { ParterCard } from '@/components/PartnerCard'
import { Footer } from '@/components/Footer'

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
        <title>F5</title>
      </Head>

      <Header />

      <main className="font-sans">
        <div className="relative w-full flex items-center justify-center bg-banner bg-cover bg-center m-auto h-[100vh] px-6 after:absolute after:inset-0 after:bg-gradient-to-t after:z-10 -z-1">
          <section className="w-full md:w-2/3 flex flex-col items-center gap-2 z-50">
            <h1 className="text-white font-Poppins font-bold text-4xl lg:text-5xl leading-tight text-center">
              Levando seu comercio para o próximo{' '}
              <span className="text-green-400">Nível</span>
            </h1>

            <p className="text-zinc-300 text-lg text-center mt-4 leading-8">
              Aqui trabalhamos em varias frentes para tornar seu emprendimento
              vísivel para o maximo de clientes, não perca tempo e converce com
              um dos nossos atendentes e faça um orçamento!
            </p>

            <a
              href="//api.whatsapp.com/send?phone=62992000000"
              className="bg-green-500 text-white text-md font-bold uppercase px-10 py-4 flex items-center gap-2 rounded-lg mt-4 hover:bg-green-600 transition-colors cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={24} />
              <span>Ligar Agora</span>
            </a>
          </section>
        </div>

        <section id="service" className="px-6 py-16 lg:py-28">
          <Container>
            <h2 className="text-3xl lg:text-4xl font-Poppins font-bold text-zinc-800 text-center">
              O que podemos fazer por você
            </h2>

            <p className="w-full lg:w-3/4 text-zinc-600 text-base text-center m-auto mt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              est illum delectus sit, libero dolores quia unde impedit omnis
              animi praesentium eum quisquam perspiciatis aliquam et ipsa fugit.
              Eos, sed.
            </p>

            <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-10 mt-14">
              <ServiceCard
                placeholder="Trafego"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
              >
                <TrendUp className="text-zinc-800" size={60} />
              </ServiceCard>
              <ServiceCard
                placeholder="Landing Page"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
              >
                <Browsers className="text-zinc-800" size={60} />
              </ServiceCard>
              <ServiceCard
                placeholder="Marketing"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
              >
                <Megaphone className="text-zinc-800" size={60} />
              </ServiceCard>
            </div>
          </Container>
        </section>

        <section
          id="portifolio"
          className="px-6 py-14 bg-zinc-700 relative after:absolute after:inset-0 after:bg-gradient-to-t-strong after:z-0"
        >
          <Container>
            <h2 className="text-3xl lg:text-4xl font-Poppins font-bold text-white text-center relative z-20">
              Projetos lançados
            </h2>
            <p className="w-full lg:w-3/4 text-zinc-200 text-base text-center m-auto mt-8 relative z-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              est illum delectus sit, libero dolores quia unde impedit omnis
              animi praesentium eum quisquam perspiciatis aliquam et ipsa fugit.
              Eos, sed.
            </p>

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
                <div className="flex justify-between gap-8 mt-8 relative z-20">
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
          </Container>
        </section>

        <section id="about" className="px-6 py-16 lg:py-28">
          <Container>
            <h2 className="text-3xl lg:text-4xl font-Poppins font-bold text-zinc-800 text-center">
              Quem Somos?
            </h2>

            <div className="flex flex-col md:flex-row mt-16 gap-8">
              <ul className="flex-1 bg-gray-100 rounded-lg px-8">
                <li className="py-4 border-b border-zinc-200">
                  <strong className="font-bold font-Poppins flex justify-center md:justify-start items-center gap-2">
                    <Target size={20} /> Objetivo
                  </strong>

                  <p className="w-full text-zinc-600 text-sm md:pl-8 text-center md:text-left mt-4 md:mt-0">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sequi est illum delectus sit, libero dolores quia unde
                    impedit omnis
                  </p>
                </li>

                <li className="py-4 border-b border-zinc-200">
                  <strong className="font-bold font-Poppins flex justify-center md:justify-start items-center gap-2">
                    <Users size={20} /> Publico alvo
                  </strong>

                  <p className="w-full text-zinc-600 text-sm md:pl-8 text-center md:text-left mt-4 md:mt-0">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sequi est illum delectus sit, libero dolores quia unde
                    impedit omnis
                  </p>
                </li>

                <li className="py-4">
                  <strong className="font-bold font-Poppins flex justify-center md:justify-start items-center gap-2">
                    <MapTrifold size={20} /> Regiões que atendemos
                  </strong>

                  <p className="w-full text-zinc-600 text-sm md:pl-8 text-center md:text-left mt-4 md:mt-0">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sequi est illum delectus sit, libero dolores quia unde
                    impedit omnis
                  </p>
                </li>
              </ul>

              <div className="flex flex-1 flex-col lg:flex-row gap-8">
                <div className="bg-gray-100 flex flex-col items-center justify-center rounded-lg p-8 z-50">
                  <Chat className="text-5xl text-zinc-800" />

                  <span className="font-Poppins font-black text-xl text-zinc-700 mt-8">
                    Fale Conosco
                  </span>
                  <span className="text-zinc-600 text-center text-sm mt-4 w-64">
                    Entre em contado e faça um orçamento já!
                  </span>

                  <a
                    href="//api.whatsapp.com/send?phone=62992000000"
                    className="bg-zinc-800 w-full text-white shadow-sm text-sm font-bold py-3 flex justify-center gap-4 rounded-lg mt-4 hover:bg-zinc-200 transition-colors cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsappLogo size={20} />
                    <span>Ligar Agora</span>
                  </a>

                  <a
                    href="mailto:institutional_email@gmail.com"
                    className="bg-white w-full text-zinc-800 text-sm font-bold py-3 flex justify-center gap-2 rounded-lg mt-2 hover:bg-zinc-200 transition-colors cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EnvelopeSimple size={20} />
                    <span>Enviar E-Mail</span>
                  </a>
                </div>

                <div className="bg-zinc-100 flex flex-col items-center justify-center rounded-lg p-8 z-50">
                  <InstagramLogo className="text-5xl text-zinc-800" />

                  <span className="font-Poppins font-black text-xl text-zinc-800 mt-8">
                    Instagram
                  </span>
                  <span className="text-zinc-600 text-center text-sm mt-4 w-64 ">
                    Sigua nossa página oficial e fique por dentro de todas as
                    novidades!
                  </span>

                  <a
                    href="https://instagram.com"
                    className="bg-gradient-instagram px-8 py-2 w-full flex justify-center rounded-lg mt-6 text-white hover:brightness-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Acesse Já</span>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}
