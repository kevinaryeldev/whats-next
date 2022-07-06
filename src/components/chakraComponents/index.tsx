import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react'
interface PageWrapperProps extends HTMLChakraProps<'div'>, ThemingProps {}
interface ButtonNewProps extends HTMLChakraProps<'button'>, ThemingProps {}

export const PageWrapper = forwardRef<PageWrapperProps, 'div'>((props, ref) => {
  const { size, variant, ...rest } = props
  const styles = useStyleConfig('PageWrapper', { size, variant })

  return <chakra.div ref={ref} __css={styles} {...rest} />
})

export const ButtonNew = forwardRef<ButtonNewProps, 'button'>((props, ref) => {
  const { size, variant, ...rest } = props
  const styles = useStyleConfig('ButtonNew', { size, variant })
  return <chakra.button ref={ref} __css={styles} {...rest} />
})
