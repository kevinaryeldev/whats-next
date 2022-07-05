import { Box } from '@chakra-ui/react'
import ButtonDarkMode from '../../../../components/ButtonDarkMode'
import ButtonRepository from '../../../../components/ButtonRepository'
const LandingNavBar = () => {
  return (
    <Box
      position="absolute"
      display="flex"
      justifyContent="flex-end"
      bg="transparent"
      padding="1rem"
      gap="2"
    >
      <ButtonDarkMode />
      <ButtonRepository />
    </Box>
  )
}

export default LandingNavBar
