import { Stack, Flex, Image } from '@chakra-ui/react'
import img from './../../assets/img/Img.png'
import { ComponentWithChildren } from '../../utils/interface'
import { PageWrapper } from '../chakraComponents'

const LoginRegister = ({ children }: ComponentWithChildren) => {
  return (
    <PageWrapper>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex
          p={[3, 5, 7]}
          flex={1}
          align={'center'}
          justify={'center'}
          as="main"
        >
          {children}
        </Flex>
        <Flex flex={1} justify={'center'} align={'stretch '}>
          <Image alt={'Login Image'} objectFit={'cover'} src={img} />
        </Flex>
      </Stack>
    </PageWrapper>
  )
}

export default LoginRegister
