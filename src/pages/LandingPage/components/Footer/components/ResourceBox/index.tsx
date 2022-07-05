import { Box, GridItem, HTMLChakraProps, IconButton } from '@chakra-ui/react'

interface ResourceBoxProps extends HTMLChakraProps<'div'> {
  children: React.ReactNode
}

const ResourceBox = ({ children, ...props }: ResourceBoxProps) => {
  return (
    <GridItem
      justifySelf="center"
      display="flex"
      justifyContent={'center'}
      gap="3px"
      width="full"
      maxW={['300px', '220px', '250px']}
      height="fit-content"
      borderRadius="2xl"
      padding={['0.5rem', '0.6rem', '0.8rem']}
      fontSize={['xs', 'sm', 'md', 'lg']}
      {...props}
    >
      {children}
    </GridItem>
  )
}

export default ResourceBox
