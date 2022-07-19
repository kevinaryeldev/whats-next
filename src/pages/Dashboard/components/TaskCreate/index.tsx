import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask } from '../../../../app/features/tasks/tasksSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { getId } from '../../../../services/auth.header'
import { createTaskSchema } from '../../../../utils/shemas/tasks'

const TaskCreate = (props: any) => {
  const taskSelector = useAppSelector((state) => state.tasks)
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(createTaskSchema) })

  const dispatch = useAppDispatch()

  const submitTask = (data: any) => {
    data.userId = getId()
    dispatch(createTask(data))
    setTimeout(props.onClose, 1000)
  }

  useEffect(() => {
    if (taskSelector.status.create === 'sucess') {
      toast({
        title: 'Tarefa criada com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      reset()
    } else if (taskSelector.status.create === 'failed') {
      toast({
        title: 'Erro na criação da tarefa',
        description: taskSelector?.error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }, [taskSelector.status.create])

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={['xs', 'md', 'lg']}
      >
        <ModalOverlay />
        <ModalContent paddingY="5" paddingX="4">
          <ModalHeader>Criar nova tarefa</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            as={'form'}
            onSubmit={handleSubmit(submitTask)}
            padding="5"
            gap="4"
            display="flex"
            flexDirection="column"
          >
            <FormControl
              id="title"
              isInvalid={errors.title}
              colorScheme="messenger"
            >
              <FormLabel fontSize={['md', 'lg']}>Título</FormLabel>
              <Input
                type="text"
                borderColor={'messenger.300'}
                {...register('title')}
              />
              {!!errors.title && (
                <FormErrorMessage color={'alertL.100'}>
                  {errors.title.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              id="description"
              colorScheme="messenger"
              isInvalid={errors.description}
            >
              <FormLabel fontSize={['md', 'lg']}>Descrição</FormLabel>
              <Input
                type="text"
                borderColor={'messenger.300'}
                {...register('description')}
              />
              {!!errors.description && (
                <FormErrorMessage color={'alertL.100'}>
                  {errors.description.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="status" colorScheme="messenger">
              <FormLabel fontSize={['md', 'lg']}>Status</FormLabel>
              <RadioGroup defaultValue={'Em Andamento'}>
                <Stack direction={['column', 'row']}>
                  <Radio {...register('status')} value="Em Andamento">
                    Em Andamento
                  </Radio>
                  <Radio {...register('status')} value="Concluida">
                    Concluida
                  </Radio>
                  <Radio {...register('status')} value="Cancelada">
                    Cancelada
                  </Radio>
                </Stack>
              </RadioGroup>
              {!!errors.staus && (
                <FormErrorMessage color={'alertL.100'}>
                  {errors.status.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              id="initialDate"
              colorScheme="messenger"
              isInvalid={errors.initialDate}
            >
              <FormLabel fontSize={['md', 'lg']}>Data Inicial</FormLabel>
              <Input
                type="text"
                borderColor={'messenger.300'}
                {...register('initialDate')}
                maxWidth={['35%', '25%', '22%']}
                maxLength={5}
              />
              {!!errors.initialDate && (
                <FormErrorMessage color={'alertL.100'}>
                  {errors.initialDate.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <Center gap="5">
              {taskSelector.status.create === 'loading' ? (
                <Button colorScheme="facebook" isLoading />
              ) : (
                <Button type="submit" colorScheme={'facebook'}>
                  Criar Tarefa
                </Button>
              )}
              <Button colorScheme={'blue'} onClick={props.onClose} mr={3}>
                Cancelar
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default TaskCreate
