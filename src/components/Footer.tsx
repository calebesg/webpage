import { useSinglePrismicDocument } from '@prismicio/react'
import {
  EnvelopeSimple,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'

import { Logo } from './Logo'
import Container from '@/components/Container'

export function Footer() {
  const [document] = useSinglePrismicDocument('footer')

  return (
    <footer className="bg-zinc-800 py-6 px-8">
      {document && (
        <Container>
          <div className="w-full flex flex-col items-center">
            <Logo color="light" />

            <p className="text-zinc-400 text-center">{document.data.text}</p>

            <ul className="flex justify-center items-center gap-4 mt-4">
              <a
                className="text-zinc-300 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-950 transition-colors"
                href={`//api.whatsapp.com/send?phone=`}
                aria-label="link para nosso whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo className="text-xl" />
              </a>
              <a
                className="text-zinc-300 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-950 transition-colors"
                href={`mailto:`}
                aria-label="email para contato"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EnvelopeSimple className="text-xl" />
              </a>

              <a
                className="text-zinc-300 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-950 transition-colors"
                href=""
                aria-label="link para nossa página no instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo className="text-xl" />
              </a>
            </ul>
            <span className="text-zinc-400 text-sm text-center w-3/4 md:w-full mt-10">
              {document.data.copy}
            </span>
          </div>
        </Container>
      )}
    </footer>
  )
}
