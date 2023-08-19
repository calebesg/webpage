import Head from "next/head"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { TrendUp, Browsers, Megaphone } from '@phosphor-icons/react'

import HeaderBar from "@/components/HeaderBar"
import ServiceCard from "@/components/ServiceCard"
import Container from "@/layout/Container"

import siteImg01 from '../../public/img/01.jpeg'
import siteImg02 from '../../public/img/03.jpeg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tavinho</title>
      </Head>

      <HeaderBar />

      <main>
        <Container>
          {/* {BANNER ==================================================} */}
          <div className="w-full relative flex items-center justify-center md:justify-start bg-banner bg-cover m-auto h-[74vh] max-h-[600px] px-6 -z-10 after:absolute after:w-full after:h-full after:bg-black/40 after:backdrop-blur-sm after:left-0 after:-z-20">
            <section className="w-full md:w-[50%]">
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

            <Swiper
              spaceBetween={140}
              slidesPerView={4}
              className="mt-16"
              modules={[]}
              effect="coverflow"
              onSlideChange={swiper => ()=> {}}
            >
              <SwiperSlide>
                <div className="relative z-10 w-80 h-96 rounded-2xl overflow-hidden cursor-pointer">
                  <Image src={siteImg01} className="h-full object-cover " alt="" />

                  <div className="absolute inset-0 bg-gradient-to-t flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-200 transition">
                    <strong className="text-white text-4xl">Apple</strong>
                    <span className="text-gray-300 text-center mt-4">Parceiros da Apple aprovam os resultados obtidos!</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative z-10 w-80 h-96 rounded-2xl overflow-hidden cursor-pointer">
                  <Image src={siteImg01} className="h-full object-cover " alt="" />

                  <div className="absolute inset-0 bg-gradient-to-t flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-200 transition">
                    <strong className="text-white text-4xl">Apple</strong>
                    <span className="text-gray-300 text-center mt-4">Parceiros da Apple aprovam os resultados obtidos!</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative z-10 w-80 h-96 rounded-2xl overflow-hidden cursor-pointer">
                  <Image src={siteImg01} className="h-full object-cover " alt="" />

                  <div className="absolute inset-0 bg-gradient-to-t flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-200 transition">
                    <strong className="text-white text-4xl">Apple</strong>
                    <span className="text-gray-300 text-center mt-4">Parceiros da Apple aprovam os resultados obtidos!</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>


        </Container>
      </main>
    </>
  )
}
