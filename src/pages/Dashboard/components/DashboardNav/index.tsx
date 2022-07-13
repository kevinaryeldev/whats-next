import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'

const DashboardNav = () => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      mx={2}
      borderWidth={0}
      overflowX="auto"
    >
      <Tabs defaultIndex={1} borderBottomColor="transparent">
        <TabList>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: 'none',
            }}
          >
            Todas
          </Tab>
          <Tab
            py={4}
            m={0}
            minW="fit-content"
            _focus={{
              boxShadow: 'none',
            }}
          >
            Em andamento
          </Tab>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: 'none',
            }}
          >
            Concluídas
          </Tab>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: 'none',
            }}
          >
            Canceladas
          </Tab>
        </TabList>
      </Tabs>
      <HStack spacing={3} alignItems="center">
        <InputGroup display={['none', null, 'block']} ml="auto">
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch />
          </InputLeftElement>
          <Input type="text" isDisabled placeholder="Pesquisar..." />
        </InputGroup>
      </HStack>
    </Flex>
  )
}
export default DashboardNav
