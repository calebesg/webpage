import { useState, createContext, useEffect } from 'react'

type LinkOption = 'DEFAULT' | 'SERVICE' | 'ABOUT' | 'CONTACT' | 'PORTIFOLIO'
type HeaderStatus = 'INITIAL' | 'SCROLL'

interface HeaderContextType {
  activedLink: LinkOption
  headerStatus: HeaderStatus
  changeActivedLink: (value: LinkOption) => void
}

export const HeaderContext = createContext<HeaderContextType>({
  activedLink: 'DEFAULT',
  headerStatus: 'INITIAL',
  changeActivedLink: () => {},
})

interface HeaderProviderProps {
  children: React.ReactNode
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [activedLink, setActivedLink] = useState<LinkOption>('DEFAULT')
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

  function changeActivedLink(newActivedLink: LinkOption) {
    setActivedLink(newActivedLink)
  }

  return (
    <HeaderContext.Provider
      value={{
        activedLink,
        changeActivedLink,
        headerStatus,
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}
