import {
  Chat,
  EnvelopeSimple,
  InstagramLogo,
  MapTrifold,
  Target,
  Users,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { Element } from 'react-scroll'

import Container from './Container'
import { AboutData } from '@/types/about'

interface AboutProps {
  data: AboutData
}

export function About({ data }: AboutProps) {
  return (
    <Element name="about" className="px-6 py-16 lg:py-28">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-Poppins font-bold text-zinc-800 text-center">
          {data.title}
        </h2>

        <div className="flex flex-col md:flex-row mt-16 gap-8">
          <ul className="flex-1 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4 md:px-8">
            <li className="py-6 md:py-4 border-b border-zinc-200">
              <strong className="font-bold font-Poppins flex justify-center md:justify-start items-center gap-2">
                <Target size={20} /> {data.info.objective.title}
              </strong>

              <p className="w-full text-zinc-600 text-sm md:pl-8 text-center md:text-left mt-4 md:mt-1 leading-6">
                {data.info.objective.text}
              </p>
            </li>
            <li className="py-6 md:py-4 border-b border-zinc-200">
              <strong className="font-bold font-Poppins flex justify-center md:justify-start items-center gap-2">
                <Users size={20} /> {data.info.public.title}
              </strong>

              <p className="w-full text-zinc-600 text-sm md:pl-8 text-center md:text-left mt-4 md:mt-1 leading-6">
                {data.info.public.text}
              </p>
            </li>

            <li className="py-6 md:py-4">
              <strong className="font-bold font-Poppins flex justify-center md:justify-start items-center gap-2">
                <MapTrifold size={20} /> {data.info.target.title}
              </strong>

              <p className="w-full text-zinc-600 text-sm md:pl-8 text-center md:text-left mt-4 md:mt-1 leading-6">
                {data.info.target.text}
              </p>
            </li>
          </ul>

          <div className="flex flex-1 flex-col lg:flex-row gap-8">
            <div className="bg-gray-100 flex flex-col items-center justify-center rounded-lg px-8 py-10 z-50">
              <Chat className="text-5xl text-zinc-800" />

              <span className="font-Poppins font-black text-xl text-zinc-700 mt-8">
                {data.contact.title}
              </span>
              <span className="text-zinc-600 text-center text-sm mt-4 w-64 leading-6">
                {data.contact.text}
              </span>

              <a
                href={`//api.whatsapp.com/send?phone=${data.contact.whatsapp}`}
                className="bg-zinc-800 w-full text-white shadow-sm text-sm font-bold py-3 flex justify-center gap-4 rounded-lg mt-8 hover:opacity-80 transition-opacity cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo size={20} />
                <span>Ligar Agora</span>
              </a>

              <a
                href={`mailto:${data.contact.email}`}
                className="bg-white w-full text-zinc-800 text-sm font-bold py-3 flex justify-center gap-2 rounded-lg mt-3 hover:opacity-80 transition-opacity  cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EnvelopeSimple size={20} />
                <span>Enviar E-Mail</span>
              </a>
            </div>

            <div className="bg-zinc-100 flex flex-col items-center justify-center rounded-lg px-8 py-10 z-50">
              <InstagramLogo className="text-5xl text-zinc-800" />

              <span className="font-Poppins font-black text-xl text-zinc-800 mt-8">
                {data.social.title}
              </span>
              <span className="text-zinc-600 text-center text-sm mt-4 w-64 leading-6">
                {data.social.text}
              </span>

              <a
                href={data.social.url}
                className="bg-gradient-instagram px-8 py-2 w-full flex justify-center rounded-lg mt-8 text-white hover:brightness-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Acesse Já</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Element>
  )
}
