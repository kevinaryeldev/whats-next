import ResourceBox from './components/ResourceBox'
import { Box, Grid, IconButton, useColorModeValue } from '@chakra-ui/react'
import { IconContext } from 'react-icons'
import { FaHeart } from 'react-icons/fa'
import {
  SiChakraui,
  SiRedux,
  SiGithub,
  SiLinkedin,
  SiGmail,
} from 'react-icons/si'

const LandingFooter = () => {
  return (
    <>
      <Box
        as="footer"
        borderTopRadius="3xl"
        display="flex"
        flexDir="column"
        alignItems="center"
        background={useColorModeValue('blueL.300', 'blueD.300')}
        height="fit-content"
        width="100%"
        padding={['1rem', '1.5rem', '2rem']}
        gap="10px"
      >
        <Grid
          gap="10px"
          gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
          width="100%"
        >
          <ResourceBox background="black" color="white">
            Deployed by <span>&#x25B2;</span> Vercel
          </ResourceBox>
          <ResourceBox
            background={useColorModeValue('gray.400', 'gray.100')}
            color={useColorModeValue('teal.600', 'teal.400')}
          >
            Styled whith
            <SiChakraui />
            Chakra
          </ResourceBox>
          <ResourceBox color="#764abc" background="gray.400">
            Powered by <SiRedux /> Redux
          </ResourceBox>
        </Grid>
        <ResourceBox
          background={'facebook.400'}
          color="whiteAlpha.700"
          maxW={['300px', '400px']}
          flexDir="column"
        >
          <Box display="flex" gap="3px" justifyContent={'center'}>
            Made with{' '}
            <IconContext.Provider value={{ color: '#E53E3E' }}>
              <FaHeart />
            </IconContext.Provider>{' '}
            by Kevin Aryel
          </Box>
          <Box display="flex" gap="5" justifyContent="center">
            <a href="https://github.com/kevinaryeldev" target="_blank">
              <IconButton
                aria-label="github"
                icon={<SiGithub />}
                size={['xs', 'sm', null, 'md']}
                colorScheme="facebook"
              />
            </a>
            <a href="https://linkedin.com/in/kevinaryeldev/" target="_blank">
              <IconButton
                aria-label="linkedin"
                icon={<SiLinkedin />}
                size={['xs', 'sm', null, 'md']}
                colorScheme="facebook"
              />
            </a>
            <a href="mailto:kevinaryel.dev@gmail.com">
              <IconButton
                aria-label="linkedin"
                icon={<SiGmail />}
                size={['xs', 'sm', null, 'md']}
                colorScheme="facebook"
              />
            </a>
          </Box>
        </ResourceBox>
      </Box>
    </>
  )
}
export default LandingFooter
