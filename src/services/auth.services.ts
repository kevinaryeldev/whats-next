import { DataLogin, DataRegister } from '../utils/interface'
import { api } from './api'
import authHeader from './auth.header'

const saveToken = (acessToken: string) => {
  localStorage.setItem('@whatsNext-userToken', JSON.stringify(acessToken))
}

const login = (data: DataLogin) => {
  return api.post('signin', data).then((response) => {
    if (response.data.accessToken) {
      saveToken(response.data.accessToken)
    }
    return response.data
  })
}

const register = (data: DataRegister) => {
  return api.post('register', data).then((response) => {
    if (response.data.accessToken) {
      saveToken(response.data.accessToken)
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
  register,
}
export default authService
