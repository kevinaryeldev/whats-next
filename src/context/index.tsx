import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { myTheme } from '../styles/theme'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ChakraProvider theme={myTheme} resetCSS>
    {children}
  </ChakraProvider>
)
