import { Box, useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { fetchTasks } from '../../app/features/tasks/tasksSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { PageWrapper } from '../../components/chakraComponents'
import TaskCard from '../../components/TaskCard'
import DashboardHeader from './components/DashboardHeader'
import DashboardNav from './components/DashboardNav'
import TaskCreate from './components/TaskCreate'

const Dashboard = () => {
  const taskModal = useDisclosure()
  const dispatch = useAppDispatch()
  const tasksSelector = useAppSelector((state) => state.tasks)

  useEffect(() => {
    if (tasksSelector.status.fetch === 'idle') {
      dispatch(fetchTasks())
    }
  }, [tasksSelector.status, dispatch])

  return (
    <PageWrapper>
      <DashboardHeader taskModal={taskModal} />
      <DashboardNav />
      <Box as="main" display="flex" flexWrap="wrap" paddingX="10" paddingY="12">
        {tasksSelector.tasks.map((el) => (
          <TaskCard task={el} key={`Task${el.id}`} />
        ))}
        <TaskCreate isOpen={taskModal.isOpen} onClose={taskModal.onClose} />
      </Box>
    </PageWrapper>
  )
}

export default Dashboard
