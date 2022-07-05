import { StyleConfig } from '@chakra-ui/theme-tools'

const components: Record<string, StyleConfig> = {
  PageWrapper: {
    baseStyle: ({ colorMode }) => ({
      bg: colorMode === 'dark' ? 'gray.100' : 'gray.400',
      width: '100%',
      height: 'fit-content',
      minH: '100vh',
    }),
  },
  ButtonNew: {
    baseStyle: ({ colorMode }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'xl',
      width: 'fit-content',
      gap: '0.25rem',
      padding: ['0.25rem', '0.5rem'],
      bg: colorMode === 'dark' ? 'blueD.100' : 'blueL.100',
      color: colorMode == 'dark' ? 'gray.100' : 'gray.400',
      _hover: {
        bg: colorMode === 'dark' ? 'blueD.200' : 'blueL.200',
      },
      _active: {
        bg: colorMode === 'dark' ? 'blueD.300' : 'blueL.300',
      },
    }),
  },
}
export default components
