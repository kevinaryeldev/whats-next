import { HTMLChakraProps } from '@chakra-ui/react'

export interface ComponentWithChildren {
  children: React.ReactNode
}

export interface ButtonNavProps extends HTMLChakraProps<'button'> {
  size?: string | (string | null)[]
  display?: string | (string | null)[]
}
export interface DataLogin {
  email?: string
  password?: string
}

export interface DataRegister extends DataLogin {
  name?: string
  passwordConfirm?: string
}
