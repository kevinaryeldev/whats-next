import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { api } from '../../../services/api'
import authHeader from '../../../services/auth.header'
import dataServices from '../../../services/data.services'

interface taskState {
  tasks:
    | [
        {
          id: string
          title: string
          description: string
          status: string
          initialDate: string
          finalDate?: string
          userId: string
        }
      ]
    | []
  status: 'idle' | 'loading' | 'sucess' | 'failed'
  error?: any
}

const initialState = {
  tasks: [],
  status: 'idle',
} as taskState

export const createTask = createAsyncThunk(
  'task/create',
  async (data: any, thunkApi) => {
    return await api
      .post('/tasks', data, authHeader())
      .then((response: AxiosResponse) => {
        return response
      })
      .catch((e: AxiosError) => thunkApi.rejectWithValue(e.response?.data))
  }
)
export const fetchTasks = createAsyncThunk('tasks/get', async (thunkApi) => {
  return await dataServices.fetchData().then((resp) => {
    return resp
  })
})

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTasks.fulfilled, (state, { payload }) => {
      state.status = 'sucess'
      payload && (state.tasks = payload)
    })
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchTasks.rejected, (state) => {
      state.status = 'failed'
    })
    builder.addCase(createTask.fulfilled, (state) => {
      state.status = 'sucess'
    })
    builder.addCase(createTask.rejected, (state, { payload }) => {
      state.status = 'failed'
      state.error = payload
    })
    builder.addCase(createTask.pending, (state) => {
      state.status = 'loading'
    })
  },
})
export default tasksSlice.reducer
