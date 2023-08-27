import { ImageType } from '@/contexts'

interface ParterCardProps {
  imageData: ImageType
  title: string
  description: string
}

export function ParterCard({ description, imageData, title }: ParterCardProps) {
  return (
    <div className="relative keen-slider__slide z-10 flex flex-col items-center lg:mx-4">
      <img
        src={imageData.url}
        className="object-cover w-full h-52 rounded-md "
        alt={imageData.alt}
      />

      <span className="font-sans uppercase font-thin text-gl text-white mt-4">
        {title}
      </span>

      <p className="text-center font-sans text-zinc-300 text-sm mt-2">
        {description}
      </p>
    </div>
  )
}
