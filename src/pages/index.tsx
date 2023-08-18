import Head from "next/head"

import { TrendUp } from '@phosphor-icons/react'

import HeaderBar from "@/components/HeaderBar"
import Container from "@/layout/Container"
import ServiceCard from "@/components/ServiceCard"

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
          <div className="w-full relative flex items-center justify-center md:justify-start bg-banner bg-cover m-auto h-[74vh] px-6 -z-10 after:absolute after:w-full after:h-full after:bg-black/30 after:backdrop-blur-sm after:left-0 after:-z-20">
            <section className="w-[50%]">
              <h1 className="text-white font-bold text-5xl leading-relaxed text-center md:text-left">
                Levando seu comercio para o próximo <span className="text-green-400">Nível</span>
              </h1>
              
              <p className="text-gray-300 text-lg pr-20 text-center mt-4 leading-8 md:text-left">
                Aqui trabalhamos em varias frentes para 
                tornar seu emprendimento vísivel para o maximo de clientes
              </p>
            </section>
          </div>

          {/* {SERVIÇOS ===================================================} */}

          <section className="px-6 py-14">
            <div className="flex">
              <div className="flex-1">
                <strong className="uppercase text-gray-600 font-light tracking-[6px]">Serviços</strong>
                <h2 className="text-4xl font-bold text-gray-800">O que podemos fazer por você</h2>
              </div>
              <p className="w-[40%] text-gray-800 font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sequi est illum delectus sit, libero dolores quia unde impedit 
                omnis animi praesentium eum quisquam perspiciatis aliquam et ipsa fugit. Eos, sed.
              </p>
            </div>

            <div className="flex justify-between gap-10 mt-14">
              <ServiceCard 
                placeholder="Trafico" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est illum" 
              >
                <TrendUp className='text-green-400 mb-10' size={80} />
              </ServiceCard>
              <ServiceCard 
                placeholder="Trafico" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est illum" 
              >
                <TrendUp className='text-green-400 mb-10' size={80} />
              </ServiceCard>
              <ServiceCard 
                placeholder="Trafico" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi est illum" 
              >
                <TrendUp className='text-green-400 mb-10' size={80} />
              </ServiceCard>
             
            </div>
          </section>
        </Container>
      </main>
    </>
  )
}
