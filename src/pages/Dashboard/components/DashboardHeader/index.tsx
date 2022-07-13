import {
  Avatar,
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  VStack,
  useDisclosure,
  useColorMode,
  Text,
  UseDisclosureProps,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiMenuAddFill } from 'react-icons/ri'
import { useAppSelector } from '../../../../app/hooks'
import ButtonDarkMode from '../../../../components/ButtonDarkMode'
import ButtonLoginLogout from '../../../../components/ButtonLoginLogout'
import ButtonRepository from '../../../../components/ButtonRepository'

const DashboardHeader = ({ taskModal }: any) => {
  const textColor = useColorModeValue('gray.400', 'gray.100')
  const mobileNav = useDisclosure()
  const userSelector = useAppSelector((state) => state.user)
  return (
    <Box
      as="header"
      bg={useColorModeValue('blueL.100', 'blueD.100')}
      borderColor="gray.200"
      borderBottomWidth={0.5}
      w="full"
      px={[4, 2]}
      py={4}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <HStack spacing={4} display="flex" alignItems="center">
          <Box display={['inline-flex', 'none']}>
            <IconButton
              _hover={{
                bg: useColorModeValue('blueL.200', 'blueD.200'),
              }}
              _active={{
                bg: useColorModeValue('blueL.300', 'blueD.300'),
              }}
              display={['flex', 'none']}
              aria-label="Open menu"
              fontSize="20px"
              color={textColor}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
              transition="all 0.7s"
            />
            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              zIndex={100}
              display={mobileNav.isOpen ? 'flex' : 'none'}
              flexDirection="column"
              p={1}
              pb={4}
              spacing={3}
              rounded="sm"
              shadow="xl"
              background={useColorModeValue('gray.400', 'gray.100')}
              borderBottom="1px solid"
              borderColor={useColorModeValue('blueL.400', 'blueD.400')}
            >
              <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={mobileNav.onClose}
              />
              <ButtonLoginLogout w="80vw" />
              <ButtonDarkMode w="80vw" />
              <ButtonRepository w="80vw" />
              <Button
                colorScheme={'facebook'}
                w="80vw"
                leftIcon={<RiMenuAddFill />}
              >
                Criar Tarefa
              </Button>
            </VStack>
          </Box>
          <Link href="/" title="HomePage" display="flex" alignItems="center">
            {/*<Logo />*/}
          </Link>
          <Heading
            as="h2"
            fontWeight={'medium'}
            fontSize="2xl"
            color={textColor}
          >
            Dashboard
          </Heading>
        </HStack>
        <HStack spacing={3} display="flex" alignItems="center">
          <HStack spacing={3} display={['none', 'inline-flex']}>
            <Button
              colorScheme={'facebook'}
              leftIcon={<RiMenuAddFill />}
              onClick={taskModal.onOpen}
            >
              Criar Tarefa
            </Button>
            <ButtonRepository />
            <ButtonDarkMode />
            <ButtonLoginLogout />
          </HStack>
          <Menu>
            <MenuButton
              transition="all 0.7s"
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar size={'sm'} />
            </MenuButton>
            <MenuList alignItems={'center'}>
              <Center>
                <Avatar size={'2xl'} />
              </Center>
              <Center>
                <Text>{userSelector.user.name}</Text>
              </Center>
              <MenuDivider />
              <MenuItem
                _hover={{
                  bg: 'inherit',
                }}
                _focus={{
                  bg: 'inherit',
                }}
              >
                Configurações da Conta
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  )
}

export default DashboardHeader
