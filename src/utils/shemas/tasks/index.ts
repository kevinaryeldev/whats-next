import * as yup from 'yup'

yup.addMethod(yup.string, 'stripEmptyString', function () {
  return this.transform((value) => (value === '' ? undefined : value))
})

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
      if (
        value &&
        Object.values(value).some(
          (v) => !(v === null || v === undefined || v === '' || v === ' ')
        )
      ) {
        return value
      }
      return undefined
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

//
