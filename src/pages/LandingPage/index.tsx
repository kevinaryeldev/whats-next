import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { ButtonNew, PageWrapper } from '../../components/chakraComponents'
import LandingFooter from './components/Footer'
import { FaEye } from 'react-icons/fa'
import LandingNavBar from './components/NavBar'
const LandingPage = () => {
  return (
    <>
      <LandingNavBar />
      <PageWrapper
        as="section"
        display="flex"
        flexDir={['column', null, 'row']}
        alignItems={['flex-start', null, 'center']}
        justifyContent={['center', null, 'flex-start']}
      >
        <Box
          w={['fit-content', null, '50%']}
          height={['50vh', null, '100vh']}
          display="flex"
          justifyContent="center"
          flexDir="column"
          paddingLeft={['4', '8', '12']}
        >
          <Heading as="h1" fontSize={['3xl', '4xl', '5xl']}>
            WHATS NEXT,
          </Heading>
          <Heading fontSize={['3xl', '4xl', '5xl']} as="h1">
            KEVIN?
          </Heading>
          <a href="/home">
            <ButtonNew marginTop={['1.5rem', '2rem', '3rem']}>
              Dar uma olhada <FaEye />
            </ButtonNew>
          </a>
        </Box>
        <Box
          display="flex"
          alignSelf="flex-start"
          w={['100%', null, '50%']}
          height={['50vh', null, '90vh']}
          bg={useColorModeValue('blueL.100', 'blueD.100')}
          justifyContent="center"
          alignItems="center"
          borderBottomLeftRadius={{ md: '3xl' }}
          boxShadow="dark-lg"
        >
          <Box
            padding={['1rem', '1.5rem', '3rem']}
            width="90%"
            bg={useColorModeValue('gray.400', 'gray.100')}
            borderRadius="3xl"
          >
            <Text
              as="h2"
              fontSize={['xl', '2xl', '3xl']}
              color={useColorModeValue('gray.100', 'gray.400')}
              textAlign="center"
            >
              Já se perguntou no que eu estou trabalhando ou estudando
              recentemente? Bem, eu fiz essa aplicação pra te responder! {''}
              <Text as="span" textDecor="line-through">
                talvez
              </Text>
            </Text>
          </Box>
        </Box>
      </PageWrapper>
      <PageWrapper
        as="main"
        alignItems="center"
        flexDir="column"
        paddingTop="40"
        justifyContent="space-between"
        display="flex"
      >
        <Box width="80%">
          <Text
            as="h2"
            fontSize={['xl', '2xl', '3xl']}
            color={useColorModeValue('gray.100', 'gray.400')}
            textAlign="center"
          >
            Um jeito simples e eficaz de fazer um acompanhamento dos meus
            progressos na área de programação.
          </Text>
        </Box>
        <LandingFooter />
      </PageWrapper>
    </>
  )
}
export default LandingPage
