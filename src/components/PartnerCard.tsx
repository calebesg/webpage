import { ImageType } from '@/types/image'

interface ParterCardProps {
  imageData: ImageType
  title: string
  description: string
}

export function ParterCard({ description, imageData, title }: ParterCardProps) {
  return (
    <div className="z-10 flex flex-col items-center flex-1">
      <img
        src={imageData.url}
        className="object-cover object-top w-full h-52 md:h-48 lg:h-56 rounded-md "
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
