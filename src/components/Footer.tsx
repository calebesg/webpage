import { useSinglePrismicDocument } from '@prismicio/react'
import {
  EnvelopeSimple,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'

import { Logo } from './Logo'
import Container from '@/components/Container'
import { FooterData } from '@/types/footer'

interface FooterProps {
  data: FooterData
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-zinc-800 py-6 px-8">
      <Container>
        <div className="w-full flex flex-col items-center">
          <Logo color="light" />

          <p className="text-zinc-400 text-center">{data.text}</p>

          <ul className="flex justify-center items-center gap-4 mt-4">
            <a
              className="text-zinc-300 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-950 transition-colors"
              href={`//api.whatsapp.com/send?phone=${data.info.whatsapp}`}
              aria-label="link para nosso whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo className="text-xl" />
            </a>
            <a
              className="text-zinc-300 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-950 transition-colors"
              href={`mailto:${data.info.email}`}
              aria-label="email para contato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EnvelopeSimple className="text-xl" />
            </a>

            <a
              className="text-zinc-300 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-950 transition-colors"
              href={data.info.social}
              aria-label="link para nossa página no instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo className="text-xl" />
            </a>
          </ul>
          <span className="text-zinc-400 text-sm text-center w-3/4 md:w-full mt-10">
            {data.copy}
          </span>
        </div>
      </Container>
    </footer>
  )
}
