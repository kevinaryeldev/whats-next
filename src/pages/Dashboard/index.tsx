import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { fetchTasks } from '../../app/features/tasks/tasksSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { PageWrapper } from '../../components/chakraComponents'
import TaskCard from '../../components/TaskCard'
import { asyncStatus } from '../../utils/interface'
import DashboardHeader from './components/DashboardHeader'
import TaskCreate from './components/TaskCreate'

const Dashboard = () => {
  const taskModal = useDisclosure()
  const dispatch = useAppDispatch()
  const tasksSelector = useAppSelector((state) => state.tasks)
  const toast = useToast()
  const toastTaskCaller = (
    status: asyncStatus | undefined,
    sucessTitle: string,
    errorTitle: string
  ) => {
    if (status === 'sucess') {
      toast({
        title: sucessTitle,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } else if (tasksSelector.status.delete === 'failed') {
      toast({
        title: errorTitle,
        status: 'error',
        description: tasksSelector?.error,
        duration: 3000,
        isClosable: true,
      })
    }
  }
  const filterStatus = (status: string) => {
    return tasksSelector.tasks
      .filter((el) => {
        return el.status === status
      })
      .map((el) => <TaskCard task={el} key={`Task${el.id}`} />)
  }

  useEffect(() => {
    if (tasksSelector.status.fetch === 'idle') {
      dispatch(fetchTasks())
    }
  }, [tasksSelector.status, dispatch])

  useEffect(() => {
    toastTaskCaller(
      tasksSelector.status.delete,
      'Tarefa deletada com sucesso',
      'Erro durante a exclusão da tarefa'
    )
  }, [tasksSelector.status.delete])

  useEffect(() => {
    toastTaskCaller(
      tasksSelector.status.update,
      'Tarefa editada com sucesso',
      'Erro durante a edição da tarefa'
    )
  }, [tasksSelector.status.update])

  return (
    <PageWrapper>
      <DashboardHeader taskModal={taskModal} />
      <Tabs
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        overflowX="auto"
        defaultIndex={1}
        borderBottomColor="transparent"
      >
        <TabList overflowX={'auto'}>
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
          <HStack spacing={3} alignItems="center" marginLeft="auto">
            <InputGroup display={['none', null, 'block']} ml="auto">
              <InputLeftElement pointerEvents="none">
                <AiOutlineSearch />
              </InputLeftElement>
              <Input type="text" isDisabled placeholder="Pesquisar..." />
            </InputGroup>
          </HStack>
        </TabList>
        <TabPanels as="main">
          <TabPanel
            display="flex"
            flexWrap="wrap"
            paddingX="10"
            paddingY="5"
            gap="5"
          >
            {tasksSelector.tasks.map((el) => (
              <TaskCard task={el} key={`Task${el.id}`} />
            ))}
          </TabPanel>
          <TabPanel
            display="flex"
            flexWrap="wrap"
            paddingX="10"
            gap="5"
            paddingY="12"
          >
            {filterStatus('Em Andamento')}
          </TabPanel>
          <TabPanel
            display="flex"
            flexWrap="wrap"
            paddingX="10"
            gap="5"
            paddingY="12"
          >
            {filterStatus('Concluida')}
          </TabPanel>
          <TabPanel
            display="flex"
            flexWrap="wrap"
            gap="5"
            paddingX="10"
            paddingY="12"
          >
            {filterStatus('Cancelada')}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <TaskCreate isOpen={taskModal.isOpen} onClose={taskModal.onClose} />
    </PageWrapper>
  )
}

export default Dashboard
