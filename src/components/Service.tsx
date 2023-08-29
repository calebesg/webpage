import { Browsers, Megaphone, TrendUp } from '@phosphor-icons/react'
import { Element } from 'react-scroll'

import Container from './Container'
import ServiceCard from './ServiceCard'
import { ServiceData } from '@/types/service'

interface ServiceProps {
  data: ServiceData
}

export function Service({ data }: ServiceProps) {
  return (
    <Element name="service" className="px-6 py-16 lg:py-28">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-Poppins font-bold text-zinc-800 text-center">
          {data.title}
        </h2>

        <p className="w-full lg:w-3/4 text-zinc-600 text-base text-center m-auto mt-8">
          {data.text}
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-10 mt-14">
          <ServiceCard
            placeholder={data.card1.title}
            description={data.card1.text}
          >
            <TrendUp className="text-zinc-800" size={60} />
          </ServiceCard>
          <ServiceCard
            placeholder={data.card2.title}
            description={data.card2.text}
          >
            <Browsers className="text-zinc-800" size={60} />
          </ServiceCard>
          <ServiceCard
            placeholder={data.card3.title}
            description={data.card3.text}
          >
            <Megaphone className="text-zinc-800" size={60} />
          </ServiceCard>
        </div>
      </Container>
    </Element>
  )
}
