import { Element } from 'react-scroll'

import Container from './Container'
import { ParterCard } from './PartnerCard'
import { PortifolioData } from '@/types/portifolio'

interface PortifolioProps {
  data: PortifolioData
}

export function Portifolio({ data }: PortifolioProps) {
  return (
    <Element
      name="portifolio"
      className="px-6 py-16 lg:pb-28 lg:pt-20 bg-zinc-700 relative after:absolute after:inset-0 after:bg-gradient-to-t-strong after:z-0"
    >
      <Container>
        <h2 className="text-2xl lg:text-4xl font-thin uppercase text-white text-center relative z-20">
          {data.title}
        </h2>

        <div className="w-full mt-10 lg:mt-16 md:px-0 flex place-items-stretch flex-col md:flex-row gap-16 md:gap-4 lg:gap-8 xl:gap-16">
          {data.cards.map((card) => {
            return (
              <ParterCard
                key={card.title}
                description={card.text}
                title={card.title}
                imageData={card.image}
              />
            )
          })}
        </div>
      </Container>
    </Element>
  )
}
