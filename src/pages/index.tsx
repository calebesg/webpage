import Head from "next/head"

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
          <div className="w-full relative flex items-center justify-center md:justify-start bg-banner bg-cover m-auto h-[74vh] px-6 -z-10 after:absolute after:w-full after:h-full after:bg-black/30 after:backdrop-blur-sm after:left-0 after:-z-20">
            <section className="w-96">
              <h1 className="text-white font-bold text-4xl leading-relaxed text-center md:text-left">
                Levando seu comercio para o proximo nível
              </h1>
              
              <p className="text-gray-300 text-center mt-4 leading-8 md:text-left">
                Aqui trabalhamos em varias frentes para 
                tornar seu emprendimento vísivel para o maximo de clientes
              </p>
            </section>
          </div>

          <section className="px-6 py-10">
            <div>
              <div>
                <strong>Serviços</strong>
                <h2>O que podemos fazer por você</h2>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sequi est illum delectus sit, libero dolores quia unde impedit 
                omnis animi praesentium eum quisquam perspiciatis aliquam et ipsa fugit. Eos, sed.
              </p>
            </div>

            <div className="flex justify-between gap-10">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </section>
        </Container>
      </main>
    </>
  )
}
