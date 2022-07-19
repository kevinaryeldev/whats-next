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
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import { editTaskSchema } from '../../../../utils/shemas/tasks'
import { editTask } from '../../../../app/features/tasks/tasksSlice'

const ModalEdit = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(editTaskSchema) })

  const dispatch = useAppDispatch()
  const taskSelector = useAppSelector((state) => state.tasks)

  const handleEdit = (data: any) => {
    data.id = props.task.id
    reset()
    dispatch(editTask(data))
    setTimeout(props.onClose, 1000)
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size={['xs', 'md', 'lg']}
    >
      <ModalOverlay />
      <ModalContent paddingY="5" paddingX="4">
        <ModalHeader>Editar tarefa</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          as={'form'}
          onSubmit={handleSubmit(handleEdit)}
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
              placeholder={props.task.title}
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
              placeholder={props.task.description}
            />
            {!!errors.description && (
              <FormErrorMessage color={'alertL.100'}>
                {errors.description.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="status" colorScheme="messenger">
            <FormLabel fontSize={['md', 'lg']}>Status</FormLabel>
            <RadioGroup defaultValue={props.task.status}>
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
              placeholder={props.task.initialDate}
            />
            {!!errors.initialDate && (
              <FormErrorMessage color={'alertL.100'}>
                {errors.initialDate.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <Center gap="5">
            {taskSelector.status.update === 'loading' ? (
              <Button colorScheme="facebook" isLoading />
            ) : (
              <Button type="submit" colorScheme={'facebook'}>
                Editar
              </Button>
            )}
            <Button colorScheme={'blue'} onClick={props.onClose} mr={3}>
              Cancelar
            </Button>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
export default ModalEdit
