import Container from '@/components/Container'
import { MenuMobile } from './MenuMobile'
import { NavOptions } from './NavOptions'
import { Logo } from './Logo'

export default function HeaderBar() {
  return (
    <header className="fixed z-[100] w-full bg-zinc-800 border-b-2 border-zinc-500 font-sans">
      <Container>
        <div className="h-24 lg:h-20 px-6 flex items-center justify-between gap-6">
          <MenuMobile />

          <Logo color="ligth" />

          <div className="hidden lg:flex">
            <NavOptions text="light" direction="row" />
          </div>
        </div>
      </Container>
    </header>
  )
}
