import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import ButtonDarkMode from '../../../../components/ButtonDarkMode'
import ButtonRepository from '../../../../components/ButtonRepository'
import ButtonLogin from '../../../../components/ButtonLogin'
const MenuNav = () => {
  const { colorMode } = useColorMode()
  return (
    <Menu autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            display={['block', 'none']}
            isActive={isOpen}
            as={Button}
            size={['md', null, 'lg']}
            aria-label="github"
            color={useColorModeValue('gray.400', 'gray.100')}
            background={useColorModeValue('blueL.100', 'blueD.100')}
            _hover={{
              bg: colorMode === 'light' ? 'blueL.200' : 'blueD.200',
            }}
            _active={{
              bg: colorMode === 'light' ? 'blueL.300' : 'blueD.300',
            }}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </MenuButton>
          <MenuList
            minW={'1'}
            color={useColorModeValue('gray.400', 'gray.100')}
            background={useColorModeValue('blueL.100', 'blueD.100')}
          >
            <MenuItem
              _hover={{
                bg: colorMode === 'light' ? 'blueL.200' : 'blueD.200',
              }}
            >
              <ButtonDarkMode size={'md'} />
            </MenuItem>
            <MenuItem
              _hover={{
                bg: colorMode === 'light' ? 'blueL.200' : 'blueD.200',
              }}
            >
              <ButtonRepository size={'md'} />
            </MenuItem>
            <MenuItem
              _hover={{
                bg: colorMode === 'light' ? 'blueL.200' : 'blueD.200',
              }}
            >
              <ButtonLogin size={'md'} />
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default MenuNav
