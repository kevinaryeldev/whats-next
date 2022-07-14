import { api } from './api'
import { getId } from './auth.header'

const fetchData = () => {
  return api.get(`/tasks?userId=${getId()}`).then((response) => {
    return response.data
  })
}

const dataServices = {
  fetchData,
}

export default dataServices
