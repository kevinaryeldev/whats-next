import {
  useColorModeValue,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { ButtonNew, PageWrapper } from '../../components/chakraComponents'
import loginSchema from '../../utils/shemas/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataLogin } from '../../utils/interface'
import { useAppDispatch } from '../../app/hooks'
import { login } from '../../app/features/admin/adminSlice'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const dispatch = useAppDispatch()

  const [viewPassword, setViewPassword] = useState(false)
  const handleShowPassword = () => setViewPassword((prev) => !prev)
  const submitLogin = (data: DataLogin) => {
    dispatch(login(data))
  }
  return (
    <PageWrapper>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={7} flex={1} align={'center'} justify={'center'}>
          <Stack
            as={'form'}
            spacing={4}
            w={'full'}
            maxW={'md'}
            padding={['2rem', '3rem', '4rem']}
            border="1px solid"
            background={'gray.400'}
            borderColor={useColorModeValue('gray.300', 'gray.200')}
            borderRadius="3xl"
            boxShadow={'2xl'}
            onSubmit={handleSubmit(submitLogin)}
          >
            <Heading fontSize={'3xl'} color={'gray.100'}>
              Login
            </Heading>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel fontSize={'lg'} color={'gray.100'}>
                Email:
              </FormLabel>
              <Input
                type="email"
                borderColor="teal"
                autoComplete="email"
                {...register('email')}
              />
              {!errors.email ? (
                <FormHelperText color={'gray.100'} fontWeight={'semibold'}>
                  Digite seu E-mail.
                </FormHelperText>
              ) : (
                <FormErrorMessage color={'alertL.100'}>
                  {errors.email.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel fontSize={'lg'} color={'gray.100'}>
                Senha:
              </FormLabel>
              <InputGroup>
                <Input
                  type={viewPassword ? 'text' : 'password'}
                  borderColor="teal"
                  autoComplete="current-password"
                  {...register('password')}
                />
                <InputRightElement width="3rem">
                  <IconButton
                    _hover={{ background: 'inherit' }}
                    _active={{ background: 'inherit' }}
                    onClick={handleShowPassword}
                    variant={'ghost'}
                    icon={viewPassword ? <FaEye /> : <FaEyeSlash />}
                    aria-label={'password visibility'}
                  />
                </InputRightElement>
              </InputGroup>
              {!errors.password ? (
                <FormHelperText color={'gray.100'} fontWeight={'semibold'}>
                  Letras, números e símbolos
                </FormHelperText>
              ) : (
                <FormErrorMessage color={'alertL.100'}>
                  {errors.password.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
                color="blue.500"
              >
                <Link to={'/'}>Voltar</Link>
              </Stack>
              <ButtonNew type="submit" padding="2" w={'full'}>
                Entrar
              </ButtonNew>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    </PageWrapper>
  )
}
export default Login
