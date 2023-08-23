import { FacebookLogo, WhatsappLogo } from '@phosphor-icons/react'
import { Logo } from './Logo'
import Container from '@/components/Container'

export function Footer() {
  return (
    <footer className="bg-withe border-t-2 border-zinc-500 py-10 px-8">
      <Container>
        <div className="w-full flex justify-between">
          <Logo color="dark" />

          <span className="text-zinc-800">@Copyright - 2023</span>

          <div className="flex items-center gap-2">
            <a className="text-zinc-800" href="tel:+55640000000">
              <WhatsappLogo size={28} />
            </a>
            <a className="text-zinc-800" href="https://facebook.com">
              <FacebookLogo size={28} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
