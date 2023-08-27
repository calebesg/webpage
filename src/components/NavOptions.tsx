import { Link } from 'react-scroll'

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
        to="main"
        onClick={handleClick}
        smooth={true}
        className="px-2 sm:px-4 lg:px-6 hover:text-green-400 transition-colors"
      >
        Início
      </Link>

      <Link
        to="service"
        activeClass="active"
        onClick={handleClick}
        smooth={true}
        className="px-2 sm:px-4 lg:px-6 hover:text-green-400 transition-colors"
      >
        Serviços
      </Link>
      <Link
        to="portifolio"
        onClick={handleClick}
        smooth={true}
        className="px-2 sm:px-4 lg:px-6 hover:text-green-400 transition-colors"
      >
        Portifólio
      </Link>
      <Link
        to="about"
        onClick={handleClick}
        smooth={true}
        className="px-2 sm:px-4 lg:px-6 hover:text-green-400 transition-colors"
      >
        Sobre
      </Link>
    </nav>
  )
}
