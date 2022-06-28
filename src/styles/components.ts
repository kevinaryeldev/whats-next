import { StyleConfig } from '@chakra-ui/theme-tools'

const components: Record<string, StyleConfig> = {
  PageWrapper: {
    baseStyle: ({ colorMode }) => ({
      bg: colorMode === 'dark' ? 'gray.100' : 'gray.400',
      W: '100%',
      H: '100vh',
      minH: 'fit-content',
    }),
  },
}
export default components
