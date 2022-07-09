import { Stack, Flex, Image } from '@chakra-ui/react'
import img from './../../assets/img/Img.png'
import { ComponentWithChildren } from '../../utils/interface'
import { PageWrapper } from '../chakraComponents'

const LoginRegister = ({ children }: ComponentWithChildren) => {
  return (
    <PageWrapper>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={7} flex={1} align={'center'} justify={'center'}>
          {children}
        </Flex>
        <Flex flex={1}>
          <Image alt={'Login Image'} objectFit={'cover'} src={img} />
        </Flex>
      </Stack>
    </PageWrapper>
  )
}

export default LoginRegister
