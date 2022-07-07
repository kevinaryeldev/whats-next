import { IconButton } from '@chakra-ui/react'
import { BiLogIn } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { ButtonNavProps } from '../../utils/interface'

const ButtonLogin = (props: ButtonNavProps) => {
  const { colorMode } = useColorMode()
  return (
    <Link to={'/login'}>
      <IconButton
        display={props.display}
        size={props.size}
        aria-label="github"
        icon={<BiLogIn />}
        background={useColorModeValue('blueL.100', 'blueD.100')}
        color={useColorModeValue('gray.400', 'gray.100')}
        _hover={{
          bg: colorMode === 'light' ? 'blueL.200' : 'blueD.200',
        }}
        _active={{
          bg: colorMode === 'light' ? 'blueL.300' : 'blueD.300',
        }}
      />
    </Link>
  )
}
export default ButtonLogin
