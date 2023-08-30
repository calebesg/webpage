import { useState } from 'react'
import { Element } from 'react-scroll'
import { useKeenSlider } from 'keen-slider/react'
import {
  useSinglePrismicDocument,
  useAllPrismicDocumentsByType,
} from '@prismicio/react'

import Container from './Container'
import { ParterCard } from './PartnerCard'
import { PortifolioData } from '@/types/portifolio'

interface PortifolioProps {
  data: PortifolioData
}

export function Portifolio({ data }: PortifolioProps) {
  // const [loaded, setLoaded] = useState(false)
  // const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef] = useKeenSlider<HTMLDialogElement>({
    initial: 0,
    slideChanged(slider) {
      // setCurrentSlide(slider.track.details.rel)
    },
    created() {
      // setLoaded(true)
    },
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 1, spacing: 32 },
      },
      '(min-width: 600px)': {
        slides: { perView: 2, spacing: 32 },
      },
      '(min-width: 800px)': {
        slides: { perView: 3, spacing: 64 },
      },
    },
    slides: { perView: 1, spacing: 16 },
  })

  return (
    <Element
      name="portifolio"
      className="px-6 py-16 lg:pb-28 lg:pt-20 bg-zinc-700 relative after:absolute after:inset-0 after:bg-gradient-to-t-strong after:z-0"
    >
      <Container>
        <h2 className="text-2xl lg:text-4xl font-thin uppercase text-white text-center relative z-20">
          {data.title}
        </h2>

        <div className="w-full mt-10 lg:mt-16 md:px-0 navigation-wrapper relative">
          <div ref={sliderRef as any} className="keen-slider">
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
        </div>
      </Container>
    </Element>
  )
}
