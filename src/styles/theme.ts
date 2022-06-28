import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react'

export const myTheme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  colors: {
    gray: {
      100: '#1C1C1C',
      200: '#585757',
      300: '#969696',
      400: '#E8E8E8',
    },
    blueL: {
      400: '#003566',
      300: '#004F99',
      200: '#1272CC',
      100: '#0084FF',
    },
    blueD: {
      100: '#168FFF',
      200: '#45A5FF',
      300: '#73BCFF',
      400: '#A2D2FF',
    },
    alertL: {
      100: '#E92C2C',
    },
    alertD: {
      100: '#F74141',
    },
  },
  fonts: {
    headings: 'Nuosu SIL',
    body: 'Roboto Serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.85rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
})

const theme = myTheme
