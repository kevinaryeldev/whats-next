import { api } from './api'

const fetchData = () => {
  return api.get('/tasks?userId=1').then((response) => {
    return response.data
  })
}

const dataServices = {
  fetchData,
}

export default dataServices
