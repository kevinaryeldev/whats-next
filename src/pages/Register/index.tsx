import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  LightMode,
  Stack,
  useToast,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import LoginRegister from '../../components/LoginRegister'
import registerSchema from '../../utils/shemas/register'
import { useColorModeValue, useColorMode } from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useReducer } from 'react'
import { DataRegister } from '../../utils/interface'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { registerUser, userSlice } from '../../app/features/admin/adminSlice'

const Register = () => {
  enum ShowPasswordCase {
    PASSWORD = 'PASSWORD',
    PASSWORDCONFIRM = 'PASSWORDCONFIRM',
  }

  interface PasswordAction {
    type: ShowPasswordCase
  }

  interface showText {
    showPassword: boolean
    showPasswordConfirm: boolean
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) })

  const handleShowPassword = (state: showText, action: PasswordAction) => {
    switch (action.type) {
      case 'PASSWORD':
        return {
          showPassword: !state.showPassword,
          showPasswordConfirm: state.showPasswordConfirm,
        }
      case 'PASSWORDCONFIRM':
        return {
          showPassword: state.showPassword,
          showPasswordConfirm: !state.showPasswordConfirm,
        }
      default:
        return state
    }
  }
  const [viewPasswordState, dispatchPasswordState] = useReducer(
    handleShowPassword,
    {
      showPassword: false,
      showPasswordConfirm: false,
    }
  )
  const toast = useToast()
  const dispatch = useAppDispatch()
  const userSelector = useAppSelector((state) => state.user)
  const navigate = useNavigate()

  const submitRegister = async (data: DataRegister) => {
    data.passwordConfirm && delete data.passwordConfirm
    await dispatch(registerUser(data))
  }

  useEffect(() => {
    if (userSelector.status?.register === 'sucess') {
      toast({
        title: 'Cadastro bem sucedido',
        description: 'Você será redirecionado em breve',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setTimeout(() => {
        navigate('/dashboard')
      }, 500)
    } else if (userSelector.status?.register === 'failed') {
      toast({
        title: 'Erro no cadastro',
        description: userSelector?.error,
        status: 'error',
        isClosable: true,
      })
    }
  }, [userSelector.status.register])

  return (
    <LoginRegister>
      <Stack
        as={'form'}
        spacing={2}
        w={'full'}
        maxW={'md'}
        padding={'1.5rem'}
        border="1px solid"
        background={'gray.400'}
        borderColor={useColorModeValue('gray.300', 'gray.200')}
        borderRadius="3xl"
        boxShadow={'2xl'}
        onSubmit={handleSubmit(submitRegister)}
      >
        <Heading fontSize={['md', 'lg', '2xl']} color={'gray.100'}>
          Cadastro:
        </Heading>
        <FormControl id="name" isInvalid={errors.name}>
          <FormLabel fontSize={['md', null, 'lg']} color={'gray.100'}>
            Nome:
          </FormLabel>
          <Input
            borderColor="teal"
            size={['xs', 'sm']}
            autoComplete="name"
            {...register('name')}
          />
          {!errors.email ? (
            <FormHelperText color={'gray.100'} fontSize={'xs'}>
              Digite seu Nome.
            </FormHelperText>
          ) : (
            <FormErrorMessage
              fontSize="xs"
              fontWeight={'semibold'}
              color={'alertL.100'}
            >
              {errors.name.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="email" isInvalid={errors.email}>
          <FormLabel fontSize={['md', null, 'lg']} color={'gray.100'}>
            Email:
          </FormLabel>
          <Input
            size={['xs', 'sm']}
            type="email"
            borderColor="teal"
            autoComplete="email"
            {...register('email')}
          />
          {!errors.email ? (
            <FormHelperText color={'gray.100'} fontSize="xs">
              Digite seu E-mail.
            </FormHelperText>
          ) : (
            <FormErrorMessage
              fontSize="xs"
              fontWeight={'semibold'}
              color={'alertL.100'}
            >
              {errors.email.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="password" isInvalid={errors.password}>
          <FormLabel fontSize={['md', null, 'lg']} color={'gray.100'}>
            Senha:
          </FormLabel>
          <InputGroup>
            <Input
              size={['xs', 'sm']}
              type={viewPasswordState.showPassword ? 'text' : 'password'}
              borderColor="teal"
              autoComplete="current-password"
              {...register('password')}
            />
            <InputRightElement height={'full'}>
              <IconButton
                _hover={{ background: 'inherit' }}
                _active={{ background: 'inherit' }}
                onClick={() =>
                  dispatchPasswordState({ type: ShowPasswordCase.PASSWORD })
                }
                variant={'ghost'}
                icon={
                  viewPasswordState.showPassword ? <FaEye /> : <FaEyeSlash />
                }
                aria-label={'password visibility'}
              />
            </InputRightElement>
          </InputGroup>
          {!errors.password ? (
            <FormHelperText fontSize="xs" color={'gray.100'}>
              Letras, números e símbolos
            </FormHelperText>
          ) : (
            <FormErrorMessage
              fontWeight={'semibold'}
              fontSize="xs"
              color={'alertL.100'}
            >
              {errors.password.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="passwordConfirm" isInvalid={errors.passwordConfirm}>
          <FormLabel fontSize={['md', null, 'lg']} color={'gray.100'}>
            Confirmar senha:
          </FormLabel>
          <InputGroup>
            <Input
              size={['xs', 'sm']}
              type={viewPasswordState.showPasswordConfirm ? 'text' : 'password'}
              borderColor="teal"
              autoComplete="off"
              {...register('passwordConfirm')}
            />
            <InputRightElement height={'full'}>
              <IconButton
                _hover={{ background: 'inherit' }}
                _active={{ background: 'inherit' }}
                onClick={() =>
                  dispatchPasswordState({
                    type: ShowPasswordCase.PASSWORDCONFIRM,
                  })
                }
                variant={'ghost'}
                icon={
                  viewPasswordState.showPasswordConfirm ? (
                    <FaEye />
                  ) : (
                    <FaEyeSlash />
                  )
                }
                aria-label={'password visibility'}
              />
            </InputRightElement>
          </InputGroup>
          {!errors.password ? (
            <FormHelperText color={'gray.100'} fontSize="xs">
              Precisa coincidir com a senha
            </FormHelperText>
          ) : (
            <FormErrorMessage
              fontWeight={'semibold'}
              fontSize="xs"
              color={'alertL.100'}
            >
              {errors.password.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <Stack spacing={6}>
          <Stack
            direction={'row'}
            align={'start'}
            justify={'space-between'}
            color="blue.500"
          >
            <Link to={'/login'}>Logar-se</Link>
            <Link to={'/'}>Voltar</Link>
          </Stack>
          <LightMode>
            {userSelector.status.register === 'loading' ? (
              <Button
                padding="2"
                w="full"
                isLoading
                loadingText="Cadastrando..."
                colorScheme="blue"
                variant="outline"
              />
            ) : (
              <Button
                type="submit"
                padding={['1.5', '2']}
                w="full"
                variant="solid"
                colorScheme="blue"
              >
                Cadastrar
              </Button>
            )}
          </LightMode>
        </Stack>
      </Stack>
    </LoginRegister>
  )
}

export default Register
