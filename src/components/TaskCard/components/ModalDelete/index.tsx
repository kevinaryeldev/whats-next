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
} from '@chakra-ui/react'

const ModalDelete = (props: any) => {
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
              <Button colorScheme={'red'}>Deletar</Button>
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
