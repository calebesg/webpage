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
        flex justify-center p-8 rounded-lg w-full gap-4
        ${theme === 'light' ? 'bg-white' : 'bg-zinc-100'}
      `}
    >
      {children}
      <div>
        <strong
          className={`
            font-Poppins font-bold text-lg
            ${theme === 'light' ? 'text-zinc-700' : 'text-zinc-700'}
          `}
        >
          {placeholder}
        </strong>
        <span className="text-zinc-600 text-sm block">{description}</span>
      </div>
    </div>
  )
}
