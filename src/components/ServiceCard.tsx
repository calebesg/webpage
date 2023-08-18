import { TrendUp } from '@phosphor-icons/react'

export default function ServiceCard() {
  return (
    <div className='flex flex-col items-center justify-center px-8 py-10 bg-gray-800 rounded-xl w-full'>
      <TrendUp className='text-green-400 mb-10' size={80} />
      <strong className='font-medium text-2xl text-gray-200'>Trafico</strong>
      <span className='text-gray-400 text-center px-4 mt-4'>
        Potêncializamos o alcance do seu negócio de forma acertiva
      </span>
    </div>
  )
}