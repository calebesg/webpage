'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { PrismicProvider } from '@prismicio/react'

import { client } from '@/libs/prismic'
import { HeaderProvider } from '../contexts'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <PrismicProvider client={client}>
      <HeaderProvider>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </HeaderProvider>
    </PrismicProvider>
  )
}
