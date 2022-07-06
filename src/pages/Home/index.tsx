import {
  Box,
  Heading,
  Input,
  Select,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import ButtonDarkMode from '../../components/ButtonDarkMode'
import ButtonRepository from '../../components/ButtonRepository'
import { PageWrapper } from '../../components/chakraComponents'
import ButtonLogin from '../../components/ButtonLogin'
import MenuNav from './components/Menu'
const Home = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <PageWrapper>
        <Box
          bgColor={useColorModeValue('blueL.200', 'blueD.200')}
          w="100%"
          as="header"
          display="flex"
          padding={['0.75rem', '1rem', '1.25rem', '1.5rem']}
          justifyContent="space-between"
          alignContent="center"
        >
          <Box display="flex" justifyContent="flex-start">
            <Heading
              color={useColorModeValue('gray.400', 'gray.100')}
              display={['none', null, 'inline-block']}
            >
              What's Next, Kevin?
            </Heading>
            <Heading
              color={useColorModeValue('gray.400', 'gray.100')}
              display={['inline-block', null, 'none']}
            >
              WN, K?
            </Heading>
          </Box>
          <Box display="flex" justifyContent="flex-end" gap="10">
            <ButtonDarkMode
              size={['md', null, 'lg']}
              display={['none', 'block']}
            />
            <ButtonRepository
              size={['md', null, 'lg']}
              display={['none', 'block']}
            />
            <ButtonLogin
              size={['md', null, 'lg']}
              display={['none', 'block']}
            />
            <MenuNav />
          </Box>
        </Box>
        <Box as="main" display="flex" flexDir="column" gap={'4rem'}>
          <Box
            padding={['1rem', '1.5rem', '2rem', '2.5rem']}
            display="flex"
            flexDir={['column', 'row']}
            gap={['2', '10%']}
            borderBottom={'.5px solid gray'}
          >
            <Input
              placeholder="Pesquisar Atividade..."
              borderColor="teal"
              borderWidth="medium"
              size="lg"
              width={['80%', '60%', '50%', '40%']}
            />
            <Select
              w={'fit-content'}
              borderColor="teal"
              borderWidth="medium"
              size="lg"
            >
              <option value="Em Andamento">Em Andamento</option>
              <option value="Pausadas">Pausadas</option>
              <option value="Canceladas">Canceladas</option>
              <option value="Finalizadas">Finalizadas</option>
            </Select>
          </Box>
          <Box
            padding={['3rem', '3.5rem', '4rem']}
            flexWrap="wrap"
            as="section"
          ></Box>
        </Box>
      </PageWrapper>
    </>
  )
}
export default Home
