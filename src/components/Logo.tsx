import Link from 'next/link'

export function Logo() {
  return (
    <Link className="uppercase text-white text-xl font-bold" href="/" passHref>
      Logo
    </Link>
  )
}
