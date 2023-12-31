import { WhatsappLogo } from '@phosphor-icons/react'

import { BannerData } from '@/types/banner'

export interface BannerProps {
  data: BannerData
}

export function Banner({
  data: { imageBanner, text, title, whatsapp },
}: BannerProps) {
  return (
    <section
      className={`
            w-full h-[100vh] bg-zinc-700 p-8 flex flex-col items-center justify-center
            relative after:absolute after:inset-0 after:bg-gradient-to-t after:z-10
            overflow-hidden
          `}
    >
      <h1 className="max-w-3xl text-white text-center text-4xl lg:text-5xl font-Poppins font-bold leading-tight z-20">
        {title}
      </h1>

      <p className="max-w-2xl mt-4 text-zinc-300 text-base text-center leading-6 z-20">
        {text}
      </p>

      <a
        href={`//api.whatsapp.com/send?phone=${whatsapp}`}
        className="bg-green-500 text-white text-md font-bold uppercase px-10 py-4 flex items-center gap-2 rounded-lg mt-4 hover:bg-green-600 transition-colors cursor-pointer z-20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappLogo size={24} />
        <span>Ligar Agora</span>
      </a>

      <img
        src={imageBanner.url}
        loading="lazy"
        className="absolute h-full w-full z-0 object-cover object-center"
        alt={imageBanner.alt}
      />
    </section>
  )
}
