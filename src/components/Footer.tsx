import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { Logo } from './Logo'
import Container from '@/components/Container'

export function Footer() {
  return (
    <footer className="bg-zinc-800 py-6 px-8">
      <Container>
        <div className="w-full flex flex-col items-center">
          <Logo color="light" />

          <p className="text-zinc-400 text-center">
            Trabalhando para tornar o digital acessível ao máximo de pessoas
            possível!
          </p>

          <ul className="flex justify-center items-center gap-4 mt-4">
            <a
              className="text-zinc-300 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-950 transition-colors"
              href="tel:+55640000000"
              aria-label="link para nosso whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo className="text-xl" />
            </a>
            <a
              className="text-zinc-300 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-950 transition-colors"
              href="mailto:institutional_email@gmail.com"
              aria-label="link para nossa página no instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EnvelopeSimple className="text-xl" />
            </a>

            <a
              className="text-zinc-300 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-950 transition-colors"
              href="https://www.instagram.com"
              aria-label="link para nossa página no instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo className="text-xl" />
            </a>
          </ul>
          <span className="text-zinc-400 text-sm text-center w-3/4 md:w-full mt-10">
            Copyright ©2023 F5 Software. Designed by F5
          </span>
        </div>
      </Container>
    </footer>
  )
}
