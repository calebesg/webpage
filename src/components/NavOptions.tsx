import Link from 'next/link'

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
        Inicio
      </Link>

      <Link
        onClick={handleClick}
        className="px-2 sm:px-4 lg:px-6 hover:text-green-400 transition-colors"
        href="#services"
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
      <Link
        onClick={handleClick}
        className="px-2 sm:px-4 lg:px-6 hover:text-green-400 transition-colors"
        href="#contact"
      >
        Contato
      </Link>
    </nav>
  )
}
