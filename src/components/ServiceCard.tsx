interface ServiceCardProps {
  placeholder: string
  description: string
  children: React.ReactNode
}

export default function ServiceCard({
  children,
  placeholder,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-20 bg-zinc-800 rounded-lg w-full">
      {children}
      <strong className="font-Poppins font-medium text-2xl text-zinc-100">
        {placeholder}
      </strong>
      <span className="text-zinc-300 text-center px-4 mt-4">{description}</span>
    </div>
  )
}
