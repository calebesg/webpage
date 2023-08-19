import Head from "next/head"
import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { TrendUp, Browsers, Megaphone, CaretLeft, CaretRight } from '@phosphor-icons/react'

import HeaderBar from "@/components/HeaderBar"
import ServiceCard from "@/components/ServiceCard"
import Container from "@/layout/Container"
import { ParterCard } from "@/components/PartnerCard"

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
    slides: { perView: 1, spacing: 16 }
  })

  return (
    <>
      <Head>
        <title>Tavinho</title>
      </Head>

      <HeaderBar />

      <main>
        <Container>
          {/* {BANNER ==================================================} */}
          <div className="w-full relative flex items-center justify-center md:justify-start bg-banner bg-cover m-auto h-[74vh] max-h-[600px] px-6 -z-10 after:absolute after:inset-0 after:bg-gradient-to-t">
            <section className="w-full md:w-[50%] z-50">
              <h1 className="text-white font-bold text-5xl leading-tight text-center md:text-left">
                Levando seu comercio para o próximo <span className="text-green-400">Nível</span>
              </h1>
              
              <p className="text-gray-300 text-lg md:pr-20 text-center mt-4 leading-8 md:text-left">
                Aqui trabalhamos em varias frentes para 
                tornar seu emprendimento vísivel para o maximo de clientes
              </p>
            </section>
          </div>

          {/* {SERVIÇOS ===================================================} */}

          <section className="px-6 py-14">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <strong className="uppercase text-gray-600 font-light tracking-[6px]">Serviços</strong>
                <h2 className="text-4xl font-bold text-gray-800">O que podemos fazer por você</h2>
              </div>
              <p className="w-full md:w-[42%] text-gray-800 font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sequi est illum delectus sit, libero dolores quia unde impedit 
                omnis animi praesentium eum quisquam perspiciatis aliquam et ipsa fugit. Eos, sed.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-10 mt-14">
              <ServiceCard 
                placeholder="Trafico" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est illum" 
              >
                <TrendUp className='text-green-400 mb-10' size={80} />
              </ServiceCard>
              <ServiceCard 
                placeholder="Landing Page" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est illum" 
              >
                <Browsers className='text-green-400 mb-10' size={80} />
              </ServiceCard>
              <ServiceCard 
                placeholder="Marketing" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est illum" 
              >
                <Megaphone className='text-green-400 mb-10' size={80} />
              </ServiceCard>
             
            </div>
          </section>

          {/* {PORTIFOLIO ======================================================} */}

          <section className="px-6 py-14 bg-gray-900 mt-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <strong className="uppercase text-gray-300 font-light tracking-[6px]"><p>portifólio</p></strong>
                <h2 className="text-4xl font-bold text-gray-100">Cases da Empresa do Tavinho</h2>
              </div>
            </div>

            <div className="w-full px-4 md:px-0 navigation-wrapper relative">
              <div ref={sliderRef as any} className="keen-slider mt-20">
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
              </div>
              {loaded && instanceRef.current && (
                <>
                  <button
                    className="arrow arrow--left absolute top-1/2 left-6 bg-black/80 md:-left-14 w-12 h-12 rounded-full translate-x-16 z-50"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                  >
                    <CaretLeft size={42} color="#fff" width="bold" />
                  </button>
                  <button
                    className="arrow arrow--right absolute top-1/2 right-6 bg-black/80 md:-right-14 w-12 h-12 rounded-full -translate-x-16 z-50"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                  >
                    <CaretRight size={42} color="#fff" width="bold" />
                  </button>
                </>
              )}
            </div>
           
          </section>


        </Container>
      </main>
    </>
  )
}
