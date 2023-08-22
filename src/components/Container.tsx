interface ContainerProps {
  children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
  return (
    <div className="max-w-xxxl m-auto">
      {children}
    </div>
  )
}