import Image from "next/image";


import siteImg01 from '../../public/img/01.jpeg'
import siteImg02 from '../../public/img/03.jpeg'

export function ParterCard() {
  return (
    <div className="relative keen-slider__slide z-10 h-96 rounded-lg overflow-hidden cursor-pointer">
      <Image src={siteImg01} className="h-full object-cover " alt="" />

      <div className="absolute inset-0 p-8 bg-gradient-to-t flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-200 transition">
        <strong className="text-white text-4xl">Apple</strong>
        <span className="text-gray-300 text-center mt-4">Parceiros da Apple aprovam os resultados obtidos!</span>
      </div>
    </div>
  )
}