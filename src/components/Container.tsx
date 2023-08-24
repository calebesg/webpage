interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-[3000px] m-auto">{children}</div>
}
