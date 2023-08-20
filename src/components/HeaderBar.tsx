import Container from "@/layout/Container";
import Link from "next/link";

export default function HeaderBar() {
	return (
		<header className="w-full bg-zinc-800 border-b-2 border-zinc-500">
      <Container>
        <div className="h-24 lg:h-20 px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6">
          <Link className="uppercase text-white text-xl font-bold" href="/" passHref>
            Logo
          </Link>

          <nav className="flex items-center gap-4 text-white/90 font-semibold">
            <Link className="px-2 sm:px-4 lg:px-6 hover:text-gray-400 transition-colors" href="">Home</Link>
            <Link className="px-2 sm:px-4 lg:px-6 hover:text-gray-400 transition-colors" href="">Portifólio</Link>
            <Link className="px-2 sm:px-4 lg:px-6 hover:text-gray-400 transition-colors" href="">Sobre</Link>
            <Link className="px-2 sm:px-4 lg:px-6 hover:text-gray-400 transition-colors" href="">Contato</Link>
          </nav>
        </div>
      </Container>
		</header>
	)
}