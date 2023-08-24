import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { Logo } from './Logo'
import Container from '@/components/Container'

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t-2 border-zinc-800 py-10 px-8">
      <Container>
        <div className="w-full flex justify-between">
          <Logo color="light" />

          <span className="text-zinc-400">@Copyright - 2023</span>

          <div className="flex items-center gap-2">
            <a
              className="text-green-400 hover:opacity-80 transition-opacity"
              href="tel:+55640000000"
              aria-label="link para nosso whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={28} />
            </a>
            <a
              className="text-pink-400 hover:opacity-80 transition-opacity"
              href="https://www.instagram.com"
              aria-label="link para nossa página no instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={28} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
