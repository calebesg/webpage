interface ServiceCardProps {
  placeholder: string,
  description: string,
  children: React.ReactNode
}

export default function ServiceCard({ children, placeholder, description }: ServiceCardProps) {
  return (
    <div className='flex flex-col items-center justify-center px-8 py-10 bg-gray-800 rounded-lg w-full'>
      {children}
      <strong className='font-medium text-2xl text-gray-200'>{placeholder}</strong>
      <span className='text-gray-400 text-center px-4 mt-4'>
        {description}
      </span>
    </div>
  )
}