import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

const TaskCard = ({ el }: any) => {
  return (
    <Box as="section" maxH={['md']} boxShadow="lg" paddingX={['4', null, '7']}>
      <Box as="header">
        <Flex alignItems="center" justifyContent="space-between">
          <Box w="70%">
            <Text as="h3" fontWeight={'semibold'}>
              {el.title}
            </Text>
          </Box>
          <Flex justifyContent="space-between" alignItems="center" w="30%">
            <IconButton aria-label="Edit Task" icon={<AiOutlineEdit />} />
            <IconButton aria-label="Delete Task" icon={<AiOutlineDelete />} />
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Text as="p">{el.description}</Text>
        <Flex justify="space-between">
          <Text as="small">{el.initialDate}</Text>
          {el.finalDate && <Text as="small">{el.finalDate}</Text>}
        </Flex>
      </Box>
    </Box>
  )
}
export default TaskCard
