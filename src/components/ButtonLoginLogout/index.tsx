import { IconButton } from '@chakra-ui/react'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { ButtonNavProps } from '../../utils/interface'
import authServices from './../../services/auth.services'
import { useAppDispatch } from '../../app/hooks'

interface ButtonLoginLogoutProps extends ButtonNavProps {
  login?: boolean
}

const ButtonLoginLogout = (props: ButtonLoginLogoutProps) => {
  const dispatch = useAppDispatch()
  const { colorMode } = useColorMode()

  const logout = async () => {
    authServices.logout()
  }
  return (
    <Link to={props.login ? '/login' : '/'}>
      <IconButton
        onClick={() => !props.login && logout()}
        display={props.display}
        size={props.size}
        w={props.w}
        aria-label={props.login ? 'login' : 'logout'}
        icon={props.login ? <BiLogIn /> : <BiLogOut />}
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
export default ButtonLoginLogout
