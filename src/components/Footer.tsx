import { FacebookLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import Container from "@/layout/Container";

export function Footer() {
  return (
    <footer className="bg-zinc-900 mt-24 py-10 px-8">
      <Container>
        <div className="w-full flex justify-between">
          <Logo />

          <span className="text-gray-300">@Copyright - 2023</span>

          <div className="flex items-center gap-2">
            <a href="tel:+55640000000">
              <WhatsappLogo color="white" size={28} />
            </a>
            <a href="https://facebook.com">
              <FacebookLogo color="white" size={28} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}