import { Box } from '@chakra-ui/react'
import ButtonDarkMode from '../../../../components/ButtonDarkMode'
import ButtonLoginLogout from '../../../../components/ButtonLoginLogout'
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
      <ButtonLoginLogout login />
    </Box>
  )
}

export default LandingNavBar
