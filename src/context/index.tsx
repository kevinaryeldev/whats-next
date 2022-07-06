import { ChakraProvider } from '@chakra-ui/react'
import { myTheme } from '../styles/theme'
import { ComponentWithChildren } from '../utils/interface'
export const AppProvider = ({ children }: ComponentWithChildren) => (
  <ChakraProvider theme={myTheme} resetCSS>
    {children}
  </ChakraProvider>
)
