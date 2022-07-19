import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import ModalDelete from './components/ModalDelete'
import ModalEdit from './components/ModalEdit'

const TaskCard = ({ task }: any) => {
  const [borderColor, setBorderColor] = useState('inherit')
  const taskDelete = useDisclosure()
  const taskEdit = useDisclosure()
  useEffect(() => {
    if (task.status === 'Concluida') {
      setBorderColor('teal')
    }
    if (task.status === 'Em Andamento') {
      setBorderColor('blue.800')
    }
    if (task.status === 'Cancelada') {
      setBorderColor('alertL.100')
    }
  }, [])

  return (
    <>
      <ModalDelete
        isOpen={taskDelete.isOpen}
        onClose={taskDelete.onClose}
        taskId={task.id}
      />
      <ModalEdit
        isOpen={taskEdit.isOpen}
        onClose={taskEdit.onClose}
        task={task}
      />
      <Box
        borderLeft={'7px solid'}
        borderLeftColor={borderColor}
        as="section"
        boxSizing="border-box"
        height={['12em', '13em']}
        width="sm"
        boxShadow="lg"
        display="flex"
        flexDir="column"
        background={useColorModeValue('blueL.100', 'blueD.100')}
        color={'gray.100'}
        paddingX={['4', null, '7']}
        paddingY={['2', null, '5']}
        borderRadius="2xl"
        justifyContent="space-between"
      >
        <Box as="header">
          <Flex alignItems="center" justifyContent="space-between">
            <Box w="70%">
              <Text as="h3" fontWeight={'semibold'}>
                {task.title}
              </Text>
            </Box>
            <Flex display="flex" gap="3" alignItems="center" w="30%">
              <IconButton
                aria-label="Edit Task"
                colorScheme="teal"
                icon={<AiOutlineEdit />}
                onClick={taskEdit.onOpen}
              />
              <IconButton
                aria-label="Delete Task"
                colorScheme="blackAlpha"
                icon={<AiOutlineDelete />}
                onClick={taskDelete.onOpen}
              />
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Text as="p">{task.description}</Text>
        </Box>
        <Box>
          <Flex justify="space-between">
            <Text as="small">{task.initialDate}</Text>
            {task.finalDate && <Text as="small">{task.finalDate}</Text>}
          </Flex>
        </Box>
      </Box>
    </>
  )
}
export default TaskCard
