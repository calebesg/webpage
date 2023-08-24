import Link from 'next/link'

interface LogoProps {
  color: 'light' | 'dark'
}

export function Logo({ color }: LogoProps) {
  return (
    <Link
      className={`
        uppercase text-xl font-bold
        ${color === 'dark' ? 'text-zinc-800' : 'text-white'}
      `}
      href="/"
    >
      Logo
    </Link>
  )
}
