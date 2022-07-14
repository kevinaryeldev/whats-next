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
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createTask } from '../../../../app/features/tasks/tasksSlice'
import { useAppDispatch } from '../../../../app/hooks'
import { getId } from '../../../../services/auth.header'
import { createTaskSchema } from '../../../../utils/shemas/tasks'

const TaskCreate = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createTaskSchema) })

  const dispatch = useAppDispatch()

  const submitTask = (data: any) => {
    data.userId = getId()
    dispatch(createTask(data))
    console.log(data)
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={['md', 'lg', 'xl']}
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
              <RadioGroup defaultValue={'Em Andamento'} {...register('status')}>
                <Stack direction={['column', 'row']}>
                  <Radio value="Em Andamento">Em Andamento</Radio>
                  <Radio value="Concluida">Concluida</Radio>
                  <Radio value="Cancelada">Cancelada</Radio>
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
                width="xs"
              />
              {!!errors.initialDate && (
                <FormErrorMessage color={'alertL.100'}>
                  {errors.initialDate.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <Center gap="5">
              <Button type="submit" colorScheme={'facebook'}>
                Criar Tarefa
              </Button>
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
