import { Stack, Flex, Image } from '@chakra-ui/react'
import img from './../../assets/img/Img.png'
import { ComponentWithChildren } from '../../utils/interface'
import { PageWrapper } from '../chakraComponents'
import img2 from './../../assets/img/AnotherBackground.jpg'

const LoginRegister = ({ children }: ComponentWithChildren) => {
  return (
    <PageWrapper>
      <Stack minH={'100vh'} direction={['column', 'row']}>
        <Flex
          bgSize={'cover'}
          bgImage={[img2, null, 'unset']}
          bgPosition={'center'}
          bgRepeat="no-repeat"
          paddingX={[7, 10]}
          paddingY={3}
          flex={1}
          align={'center'}
          justify={'center'}
          as="main"
        >
          {children}
        </Flex>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          display={['none', null, 'flex']}
        >
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={img}
            height="80%"
          />
        </Flex>
      </Stack>
    </PageWrapper>
  )
}

export default LoginRegister
