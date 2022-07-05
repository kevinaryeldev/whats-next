import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'
const ButtonDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      background={useColorModeValue('blueL.100', 'blueD.100')}
      color={useColorModeValue('gray.400', 'gray.100')}
      _hover={{
        bg: colorMode === 'light' ? 'blueL.200' : 'blueD.200',
      }}
      _active={{
        bg: colorMode === 'light' ? 'blueL.300' : 'blueD.300',
      }}
    >
      {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  )
}
export default ButtonDarkMode
