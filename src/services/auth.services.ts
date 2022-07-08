import { DataLogin } from '../utils/interface'
import { api } from './api'
import authHeader from './auth.header'

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

const update = (data: DataLogin) => {
  return api.patch('user', data, authHeader()).then((response) => {
    return response.data
  })
}

const logout = () => {
  localStorage.removeItem('@whatsNext-userToken')
}

const authService = {
  login,
  logout,
  update,
}
export default authService
