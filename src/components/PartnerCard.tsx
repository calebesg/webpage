import Image from 'next/image'

import siteImg01 from '../../public/img/01.jpeg'

export function ParterCard() {
  return (
    <div className="relative keen-slider__slide z-10 rounded-md overflow-hidden flex flex-col items-center">
      <Image src={siteImg01} className="object-cover " alt="" />

      <span className="font-sans uppercase font-thin text-gl text-white mt-4">
        FH Software
      </span>

      <p className="text-center font-sans text-zinc-300 text-xs mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate
        praesentium quos error.
      </p>
    </div>
  )
}
