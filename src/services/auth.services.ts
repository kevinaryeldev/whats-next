import { DataLogin, DataRegister } from '../utils/interface'
import { api } from './api'
import authHeader from './auth.header'

const saveToken = (acessToken: string, userId: string) => {
  localStorage.setItem('@whatsNext-userToken', acessToken)
  localStorage.setItem('@whatsNext-userId', userId)
}

const login = (data: DataLogin) => {
  return api.post('signin', data).then((response) => {
    if (response.data.accessToken) {
      saveToken(response.data.accessToken, response.data.user.id)
    }
    return response.data
  })
}

const register = (data: DataRegister) => {
  return api.post('register', data).then((response) => {
    if (response.data.accessToken) {
      saveToken(response.data.accessToken, response.data.user.id)
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
  console.log('logout')
  localStorage.removeItem('@whatsNext-userToken')
  localStorage.removeItem('@whatsNext-userId')
}
const checkLogin = () => {
  const token = localStorage?.getItem('@whatsNext-userToken')
  if (token) {
    return true
  } else {
    return false
  }
}

const getUserData = async () => {
  if (!checkLogin()) {
    return {}
  } else {
    return api
      .get(`/users/${localStorage.getItem('@whatsNext-userId')}/`, authHeader())
      .then((resp) => {
        delete resp.data.password
        return resp.data
      })
      .catch((e) => {
        logout
        return {}
      })
  }
}

const authService = {
  login,
  logout,
  update,
  register,
  checkLogin,
  getUserData,
}
export default authService
