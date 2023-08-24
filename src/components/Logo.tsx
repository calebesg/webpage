import Link from 'next/link'

interface LogoProps {
  color: 'ligth' | 'dark'
}

export function Logo({ color }: LogoProps) {
  return (
    <Link
      className={`
        uppercase text-xl font-bold
        ${color === 'dark' ? 'text-zinc-300' : 'text-white'}
      `}
      href="/"
      passHref
    >
      Logo
    </Link>
  )
}
