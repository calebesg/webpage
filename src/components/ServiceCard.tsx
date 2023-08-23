interface ServiceCardProps {
  placeholder: string
  description: string
  theme?: 'dark' | 'light'
  children: React.ReactNode
}

export default function ServiceCard({
  children,
  placeholder,
  description,
  theme,
}: ServiceCardProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center px-8 py-20 rounded-lg w-full
        ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'}
      `}
    >
      {children}
      <strong
        className={`
          font-Poppins font-medium text-2xl
          ${theme === 'light' ? 'text-zinc-700' : 'text-zinc-100'}
        `}
      >
        {placeholder}
      </strong>
      <span className="text-zinc-300 text-center px-4 mt-4">{description}</span>
    </div>
  )
}
