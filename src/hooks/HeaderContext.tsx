import { useState, createContext, useEffect } from 'react'

type HeaderStatus = 'INITIAL' | 'SCROLL'

interface HeaderContextType {
  headerStatus: HeaderStatus
}

export const HeaderContext = createContext<HeaderContextType>({
  headerStatus: 'INITIAL',
})

interface HeaderProviderProps {
  children: React.ReactNode
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [headerStatus, setHeaderStatus] = useState<HeaderStatus>('INITIAL')

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderStatus)

    return () => {
      window.removeEventListener('scroll', changeHeaderStatus)
    }
  }, [])

  function changeHeaderStatus() {
    if (window === undefined) return

    const windowHeight = window.scrollY

    windowHeight > 50 ? setHeaderStatus('SCROLL') : setHeaderStatus('INITIAL')
  }

  return (
    <HeaderContext.Provider value={{ headerStatus }}>
      {children}
    </HeaderContext.Provider>
  )
}
