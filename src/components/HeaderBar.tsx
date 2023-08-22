import Link from 'next/link'
import Container from '@/components/Container'

import { MenuMobile } from './MenuMobile'
import { NavOptions } from './NavOptions'

export default function HeaderBar() {
  return (
    <header className="fixed z-50 w-full bg-zinc-800 border-b-2 border-zinc-500">
      <Container>
        <div className="h-24 lg:h-20 px-6 flex items-center justify-between gap-6">
          <MenuMobile />

          <Link
            className="uppercase text-white text-xl font-bold"
            href="/"
            passHref
          >
            Logo
          </Link>

          <div className="hidden lg:flex">
            <NavOptions text="light" direction="row" />
          </div>
        </div>
      </Container>
    </header>
  )
}
