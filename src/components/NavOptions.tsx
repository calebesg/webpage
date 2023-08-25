import Link from 'next/link'

import { useHeaderData } from '@/hooks'

interface NavOptionsProps {
  text: 'light' | 'dark'
  direction: 'row' | 'col'
  callbackOnClickLink?: () => void
}

export function NavOptions({
  text,
  direction,
  callbackOnClickLink,
}: NavOptionsProps) {
  function handleClick() {
    callbackOnClickLink ? callbackOnClickLink() : null
  }

  return (
    <nav
      className={`
        flex font-semibold gap-4
        ${text === 'light' ? 'text-white' : 'text-zinc-800'}
        ${
          direction === 'row'
            ? 'flex-row items-center'
            : 'flex-col items-start mt-16'
        }
      `}
    >
      <Link
        onClick={handleClick}
        className="px-2 sm:px-4 lg:px-6 hover:text-green-400 transition-colors"
        href="/"
      >
        Início
      </Link>

      <Link
        onClick={handleClick}
        className="px-2 sm:px-4 lg:px-6 hover:text-green-400 transition-colors"
        href="#service"
      >
        Serviços
      </Link>
      <Link
        onClick={handleClick}
        className="px-2 sm:px-4 lg:px-6 hover:text-green-400 transition-colors"
        href="#portifolio"
      >
        Portifólio
      </Link>
      <Link
        onClick={handleClick}
        className="px-2 sm:px-4 lg:px-6 hover:text-green-400 transition-colors"
        href="#about"
      >
        Sobre
      </Link>
    </nav>
  )
}
