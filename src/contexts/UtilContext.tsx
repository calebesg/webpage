import { useSinglePrismicDocument } from '@prismicio/react'
import { createContext, useEffect, useState } from 'react'

export type ImageType = {
  url: string
  alt: string
}

interface UtilContextType {
  logo: ImageType | null
  whatsapp: number | null
  email: string
  socialUrl: string
}

export const UtilContext = createContext<UtilContextType>({
  logo: null,
  whatsapp: null,
  email: '',
  socialUrl: '',
})

interface UtilProviderProps {
  children: React.ReactNode
}

export function UtilProvider({ children }: UtilProviderProps) {
  const [document] = useSinglePrismicDocument('global')
  const [data, setData] = useState<UtilContextType>({
    logo: null,
    email: '',
    whatsapp: null,
    socialUrl: '',
  })

  useEffect(() => {
    if (document != undefined) {
      const image = document.data.logo?.url ? document.data.logo : null

      setData({
        logo: image,
        email: document.data.email,
        whatsapp: document.data.whatsapp,
        socialUrl: document.data.social_link,
      })
    }
  }, [document])

  return <UtilContext.Provider value={data}>{children}</UtilContext.Provider>
}
