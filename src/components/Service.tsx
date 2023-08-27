import { Browsers, Megaphone, TrendUp } from '@phosphor-icons/react'
import { useSinglePrismicDocument } from '@prismicio/react'

import Container from './Container'
import ServiceCard from './ServiceCard'

export function Service() {
  const [document] = useSinglePrismicDocument('servicesection')

  return (
    <section id="service" className="px-6 py-16 lg:py-28">
      <Container>
        {document && (
          <>
            <h2 className="text-3xl lg:text-4xl font-Poppins font-bold text-zinc-800 text-center">
              {document.data.servicetitle}
            </h2>

            <p className="w-full lg:w-3/4 text-zinc-600 text-base text-center m-auto mt-8">
              {document.data.servicetext}
            </p>

            <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-10 mt-14">
              <ServiceCard
                placeholder={document.data.service_card1_title}
                description={document.data.service_card1_text}
              >
                <TrendUp className="text-zinc-800" size={60} />
              </ServiceCard>
              <ServiceCard
                placeholder={document.data.service_card2_title}
                description={document.data.service_card2_text}
              >
                <Browsers className="text-zinc-800" size={60} />
              </ServiceCard>
              <ServiceCard
                placeholder={document.data.service_card3_title}
                description={document.data.service_card3_text}
              >
                <Megaphone className="text-zinc-800" size={60} />
              </ServiceCard>
            </div>
          </>
        )}
      </Container>
    </section>
  )
}
