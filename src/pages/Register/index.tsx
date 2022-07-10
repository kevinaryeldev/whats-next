import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import LoginRegister from '../../components/LoginRegister'
import registerSchema from '../../utils/shemas/register'
import { useColorModeValue, useColorMode } from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ButtonNew } from '../../components/chakraComponents'
import { Link, useNavigate } from 'react-router-dom'
import { useReducer } from 'react'
import { DataRegister } from '../../utils/interface'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { registerUser } from '../../app/features/admin/adminSlice'

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
  const dispatch = useAppDispatch()
  const userSelector = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  const submitLogin = async (data: DataRegister) => {
    data.passwordConfirm && delete data.passwordConfirm
    await dispatch(registerUser(data)).then(() => {
      userSelector.isLoggedIn === true && navigate('/home')
    })
  }

  return (
    <LoginRegister>
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
        <FormControl id="name" isInvalid={errors.name}>
          <FormLabel fontSize={'lg'} color={'gray.100'}>
            Nome:
          </FormLabel>
          <Input borderColor="teal" autoComplete="name" {...register('name')} />
          {!errors.email ? (
            <FormHelperText
              color={'gray.100'}
              fontWeight={'semibold'}
              fontSize="xs"
            >
              Digite seu Nome.
            </FormHelperText>
          ) : (
            <FormErrorMessage fontSize="xs" color={'alertL.100'}>
              {errors.name.message}
            </FormErrorMessage>
          )}
        </FormControl>
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
            <FormHelperText
              color={'gray.100'}
              fontWeight={'semibold'}
              fontSize="xs"
            >
              Digite seu E-mail.
            </FormHelperText>
          ) : (
            <FormErrorMessage fontSize="xs" color={'alertL.100'}>
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
              type={viewPasswordState.showPassword ? 'text' : 'password'}
              borderColor="teal"
              autoComplete="current-password"
              {...register('password')}
            />
            <InputRightElement width="3rem">
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
            <FormHelperText
              fontSize="xs"
              color={'gray.100'}
              fontWeight={'semibold'}
            >
              Letras, números e símbolos
            </FormHelperText>
          ) : (
            <FormErrorMessage fontSize="xs" color={'alertL.100'}>
              {errors.password.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="passwordConfirm" isInvalid={errors.passwordConfirm}>
          <FormLabel fontSize={'lg'} color={'gray.100'}>
            Confirmar senha:
          </FormLabel>
          <InputGroup>
            <Input
              type={viewPasswordState.showPasswordConfirm ? 'text' : 'password'}
              borderColor="teal"
              autoComplete="off"
              {...register('passwordConfirm')}
            />
            <InputRightElement width="3rem">
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
            <FormHelperText
              color={'gray.100'}
              fontWeight={'semibold'}
              fontSize="xs"
            >
              Precisa coincidir com a senha
            </FormHelperText>
          ) : (
            <FormErrorMessage fontSize="xs" color={'alertL.100'}>
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
          <ButtonNew type="submit" padding="2" w={'full'}>
            Cadastrar
          </ButtonNew>
        </Stack>
      </Stack>
    </LoginRegister>
  )
}

export default Register
