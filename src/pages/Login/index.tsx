import {
  useColorModeValue,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  IconButton,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Button,
  LightMode,
} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import loginSchema from '../../utils/shemas/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataLogin } from '../../utils/interface'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { login } from '../../app/features/admin/adminSlice'
import LoginRegister from '../../components/LoginRegister'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userSelector = useAppSelector((state) => state.user)
  const toast = useToast()
  const [viewPassword, setViewPassword] = useState(false)
  const handleShowPassword = () => setViewPassword((prev) => !prev)
  const submitLogin = async (data: DataLogin) => {
    await dispatch(login(data))
  }

  useEffect(() => {
    if (userSelector.status?.login === 'sucess') {
      toast({
        title: 'Login bem sucedido',
        description: 'Você está sendo redirecionado',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setTimeout(() => {
        navigate('/dashboard')
      }, 500)
    } else if (userSelector.status.login === 'failed') {
      toast({
        title: 'Erro no login',
        description: userSelector?.error,
        status: 'error',
        isClosable: true,
      })
    }
  }, [userSelector.status.login])

  return (
    <LoginRegister>
      <Stack
        as={'form'}
        spacing={[2, 4, 5]}
        w={'full'}
        maxW={'md'}
        padding={['1.5rem', '2rem', '2.5rem']}
        border="1px solid"
        background={'gray.400'}
        borderColor={useColorModeValue('gray.300', 'gray.200')}
        borderRadius="3xl"
        boxShadow={'2xl'}
        onSubmit={handleSubmit(submitLogin)}
      >
        <Heading fontSize={['md', '2xl', '3xl']} color={'gray.100'}>
          Login
        </Heading>
        <FormControl id="email" isInvalid={errors.email}>
          <FormLabel fontSize={['md', 'lg']} color={'gray.100'}>
            Email:
          </FormLabel>
          <Input
            size={['xs', 'sm', 'md']}
            type="email"
            borderColor="teal"
            autoComplete="email"
            {...register('email')}
          />
          {!errors.email ? (
            <FormHelperText color={'gray.100'} fontSize={['xs', 'sm']}>
              Digite seu E-mail.
            </FormHelperText>
          ) : (
            <FormErrorMessage
              color={'alertL.100'}
              fontSize={['xs', 'sm']}
              fontWeight={'semibold'}
            >
              {errors.email.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="password" isInvalid={errors.password}>
          <FormLabel fontSize={['md', 'lg']} color={'gray.100'}>
            Senha:
          </FormLabel>
          <InputGroup>
            <Input
              size={['xs', 'sm', 'md']}
              type={viewPassword ? 'text' : 'password'}
              borderColor="teal"
              autoComplete="current-password"
              {...register('password')}
            />
            <InputRightElement height={'full'}>
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
            <FormHelperText color={'gray.100'} fontSize={['xs', 'sm']}>
              Letras, números e símbolos
            </FormHelperText>
          ) : (
            <FormErrorMessage
              color={'alertL.100'}
              fontWeight={'semibold'}
              fontSize={['xs', 'sm']}
            >
              {errors.password.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <Stack spacing={[2, 4, 6]}>
          <Stack
            direction={'row'}
            align={'start'}
            justify={'space-between'}
            color="blue.500"
          >
            <Link to={'/register'}>Cadastrar-se</Link>
            <Link to={'/'}>Voltar</Link>
          </Stack>
          <LightMode>
            {userSelector.status.login === 'loading' ? (
              <Button
                padding="2"
                w="full"
                isLoading
                loadingText="Logando..."
                colorScheme="blue"
                variant="outline"
              ></Button>
            ) : (
              <Button
                type="submit"
                padding="2"
                w="full"
                variant="solid"
                colorScheme="blue"
              >
                Entrar
              </Button>
            )}
          </LightMode>
        </Stack>
      </Stack>
    </LoginRegister>
  )
}
export default Login
