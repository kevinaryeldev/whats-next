import {
  Button,
  Center,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { deleteTask } from '../../../../app/features/tasks/tasksSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'

const ModalDelete = (props: any) => {
  const dispatch = useAppDispatch()
  const toast = useToast()
  const taskSelector = useAppSelector((state) => state.tasks)

  const handleDelete = () => {
    dispatch(deleteTask(props.taskId))
    console.log(props.taskId)
  }

  useEffect(() => {
    if (taskSelector.status.delete === 'sucess') {
      toast({
        title: 'Tarefa deletada com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } else if (taskSelector.status.delete === 'failed') {
      toast({
        title: 'Erro durante a exclusão da tarefa',
        status: 'error',
        description: taskSelector?.error,
        duration: 3000,
        isClosable: true,
      })
    }
  }, [taskSelector.status.delete])

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={['xs', 'sm', 'md']}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader as="header">Deletar tarefa</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding="5" gap="4" display="flex" flexDirection="column">
            <Text as="p">Tem certeza que deseja deletar esta tarefa?</Text>
          </ModalBody>
          <ModalFooter>
            <Center gap="5">
              <Button colorScheme={'red'} onClick={handleDelete}>
                Deletar
              </Button>
              <Button colorScheme={'blue'} onClick={props.onClose} mr={3}>
                Cancelar
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalDelete
function toast(arg0: {
  title: string
  status: string
  duration: number
  isClosable: boolean
}) {
  throw new Error('Function not implemented.')
}
