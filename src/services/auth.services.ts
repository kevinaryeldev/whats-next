import { DataLogin } from '../utils/interface'
import { api } from './api'

const login = (data: DataLogin) => {
  return api.post('signin', data).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem(
        '@whatsNext-userToken',
        JSON.stringify(response.data.accessToken)
      )
    }
    return response.data
  })
}

const logout = () => {
  localStorage.removeItem('@whatsNext-userToken')
}

const authService = {
  login,
  logout,
}
export default authService
