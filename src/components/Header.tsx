import { useHeaderData } from '@/hooks'

import Container from '@/components/Container'
import { MenuMobile } from './MenuMobile'
import { NavOptions } from './NavOptions'
import { Logo } from './Logo'

export default function Header() {
  const { headerStatus } = useHeaderData()

  const showMenu = 'animate-show-menu bg-zinc-800 border-b-2 border-zinc-700'

  return (
    <header
      className={`
        fixed top-0 w-full bg-transparent font-sans 
        ${headerStatus === 'SCROLL' ? showMenu : ''} 
        z-[100] transition-colors`}
    >
      <Container>
        <div className="h-24 lg:h-20 px-6 flex items-center justify-between gap-6">
          <MenuMobile />

          <Logo color={headerStatus === 'INITIAL' ? 'dark' : 'light'} />

          <div className="hidden lg:flex">
            <NavOptions
              text={headerStatus === 'INITIAL' ? 'dark' : 'light'}
              direction="row"
            />
          </div>
        </div>
      </Container>
    </header>
  )
}
