import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import ButtonDarkMode from '../../components/ButtonDarkMode'
import ButtonRepository from '../../components/ButtonRepository'
import { PageWrapper } from '../../components/chakraComponents'

const Home = () => {
  return (
    <>
      <PageWrapper>
        <Box
          bgColor={useColorModeValue('blueL.200', 'blueD.200')}
          w="100%"
          as="header"
          display="flex"
          padding={['0.75rem', '1rem', '1.25rem', '1.5rem']}
          position="fixed"
          justifyContent="space-between"
          alignContent="center"
        >
          <Box display="flex" justifyContent="flex-start">
            <Heading
              color={useColorModeValue('gray.400', 'gray.100')}
              display={['none', null, 'inline-block']}
            >
              What's Next, Kevin?
            </Heading>
            <Heading
              color={useColorModeValue('gray.400', 'gray.100')}
              display={['inline-block', null, 'none']}
            >
              WN, K?
            </Heading>
          </Box>
          <Box display="flex" justifyContent="flex-end" gap="10">
            <ButtonDarkMode />
            <ButtonRepository />
          </Box>
        </Box>
      </PageWrapper>
    </>
  )
}
export default Home
