import Link from "next/link";

interface NavOptionsProps {
  text: 'light' | 'dark',
  direction: 'row' | 'col',
}

export function NavOptions({ text, direction }: NavOptionsProps) {
  return(
    <nav 
      className={`
        flex font-semibold gap-4
        ${text === 'light' ? 'text-white/90' : 'text-zinc-800'}
        ${direction === 'row' ? 'flex-row items-center' : 'flex-col items-start mt-16'}
      `}
    >
      <Link className="px-2 sm:px-4 lg:px-6 hover:text-gray-400 transition-colors" href="/">Home</Link>
      <Link className="px-2 sm:px-4 lg:px-6 hover:text-gray-400 transition-colors" href="#services">Serviços</Link>
      <Link className="px-2 sm:px-4 lg:px-6 hover:text-gray-400 transition-colors" href="#portifolio">Portifólio</Link>
      <Link className="px-2 sm:px-4 lg:px-6 hover:text-gray-400 transition-colors" href="#about">Sobre</Link>
    </nav>
  )
}