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
} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { ButtonNew } from '../../components/chakraComponents'
import loginSchema from '../../utils/shemas/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataLogin } from '../../utils/interface'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { login } from '../../app/features/admin/adminSlice'
import img from './../../assets/img/Img.png'
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
  const selector = useAppSelector((state) => state.user)

  const [viewPassword, setViewPassword] = useState(false)
  const handleShowPassword = () => setViewPassword((prev) => !prev)
  const submitLogin = async (data: DataLogin) => {
    await dispatch(login(data))
    selector.status.login === 'sucess' && navigate('/home')
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
    </LoginRegister>
  )
}
export default Login
