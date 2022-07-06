import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SiGithub } from 'react-icons/si'
import { ButtonNavProps } from '../../utils/interface'

const ButtonRepository = (props: ButtonNavProps) => {
  const { colorMode } = useColorMode()
  return (
    <a href="https://github.com/kevinaryeldev/whats-next" target="_blank">
      <IconButton
        size={props.size}
        display={props.display}
        aria-label="github"
        icon={<SiGithub />}
        background={useColorModeValue('blueL.100', 'blueD.100')}
        color={useColorModeValue('gray.400', 'gray.100')}
        _hover={{
          bg: colorMode === 'light' ? 'blueL.200' : 'blueD.200',
        }}
        _active={{
          bg: colorMode === 'light' ? 'blueL.300' : 'blueD.300',
        }}
      />
    </a>
  )
}
export default ButtonRepository
