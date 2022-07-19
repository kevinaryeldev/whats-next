import * as yup from 'yup'

const transformInvalidTo = (value: any) => {
  if (
    value &&
    Object.values(value).some(
      (v) => !(v === null || v === undefined || v === '' || v === ' ')
    )
  ) {
    return value
  }
  return undefined
}
export const createTaskSchema = yup.object().shape({
  title: yup.string().required('Campo Obrigatório').min(4, 'Curto Demais'),
  description: yup.string().required('Campo Obrigatório'),
  finalDate: yup
    .string()
    .matches(
      /^((0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[0-2]))$/,
      'formato dd/mm'
    ),
  status: yup
    .string()
    .equals(['Em Andamento', 'Cancelada', 'Concluida'], 'Errou'),
  initialDate: yup
    .string()
    .transform((value) => {
      transformInvalidTo(value)
    })
    .default(() => {
      return new Intl.DateTimeFormat('pt-br', {
        month: '2-digit',
        day: '2-digit',
      }).format(new Date())
    })
    .matches(
      /^$|^((0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[0-2]))$/,
      'formato dd/mm'
    ),
})

export const editTaskSchema = yup.object().shape({
  title: yup.string().transform((value) => {
    transformInvalidTo(value)
  }),
  description: yup.string().transform((value) => {
    transformInvalidTo(value)
  }),
  finalDate: yup
    .string()
    .transform((value) => {
      transformInvalidTo(value)
    })
    .matches(
      /^((0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[0-2]))$/,
      'formato dd/mm'
    ),
  status: yup
    .string()
    .transform((value) => {
      transformInvalidTo(value)
    })
    .equals(['Em Andamento', 'Cancelada', 'Concluida'], 'Errou'),
  initialDate: yup
    .string()
    .transform((value) => {
      transformInvalidTo(value)
    })
    .matches(
      /^$|^((0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[0-2]))$/,
      'formato dd/mm'
    ),
})
