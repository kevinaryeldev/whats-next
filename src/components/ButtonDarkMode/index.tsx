import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'
import { ButtonNavProps } from '../../utils/interface'

const ButtonDarkMode = (props: ButtonNavProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      w={props.w}
      size={props.size}
      display={props.display}
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
