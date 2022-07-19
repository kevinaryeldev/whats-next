import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../services/api'
import { authHeader } from '../../../services/auth.header'
import dataServices from '../../../services/data.services'
import { asyncStatus } from '../../../utils/interface'

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
  status: {
    fetch: asyncStatus
    create?: asyncStatus
    update?: asyncStatus
    delete?: asyncStatus
  }
  error?: any
}

const initialState = {
  tasks: [],
  status: { fetch: 'idle' },
} as taskState

export const createTask = createAsyncThunk(
  'task/create',
  async (data: any, thunkApi) => {
    return await api
      .post('/tasks', data, authHeader())
      .then((response) => {
        return
      })
      .catch((e) => thunkApi.rejectWithValue(e.response?.data))
  }
)
export const fetchTasks = createAsyncThunk('tasks/get', async (thunkApi) => {
  return await dataServices.fetchData().then((resp) => {
    return resp
  })
})
export const deleteTask = createAsyncThunk(
  'task/delete',
  async (id: number, thunkApi) => {
    return await api
      .delete(`/tasks/${id}`, authHeader())
      .then((response) => {
        return response
      })
      .catch((e) => {
        thunkApi.rejectWithValue(e.response?.data)
      })
  }
)
export const editTask = createAsyncThunk(
  'tasks/edit',
  async (data: any, thunkApi) => {
    return await api
      .patch(`/tasks/${data.id}`, data, authHeader())
      .then((response) => {
        return response
      })
      .catch((e) => {
        thunkApi.rejectWithValue(e.response?.data)
      })
  }
)
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTasks.fulfilled, (state, { payload }) => {
      state.status.fetch = 'sucess'
      payload && (state.tasks = payload)
    })
    builder.addCase(fetchTasks.pending, (state) => {
      state.status.fetch = 'loading'
      state.error && delete state.error
    })
    builder.addCase(fetchTasks.rejected, (state) => {
      state.status.fetch = 'failed'
    })
    builder.addCase(createTask.fulfilled, (state) => {
      state.status.create = 'sucess'
      state.status.fetch = 'idle'
    })
    builder.addCase(createTask.rejected, (state, { payload }) => {
      state.status.create = 'failed'
      state.error = payload
    })
    builder.addCase(createTask.pending, (state) => {
      state.status.create = 'loading'
      state.error && delete state.error
    })
    builder.addCase(deleteTask.rejected, (state, { payload }) => {
      state.status.delete = 'failed'
      state.error = payload
    })
    builder.addCase(deleteTask.fulfilled, (state) => {
      state.status.delete = 'sucess'
      state.status.fetch = 'idle'
    })
    builder.addCase(deleteTask.pending, (state) => {
      state.status.delete = 'loading'
      delete state?.error
    })
    builder.addCase(editTask.rejected, (state, { payload }) => {
      state.status.update = 'failed'
      state.error = payload
    })
    builder.addCase(editTask.fulfilled, (state) => {
      state.status.update = 'sucess'
      state.status.fetch = 'idle'
    })
    builder.addCase(editTask.pending, (state) => {
      state.status.update = 'loading'
      delete state?.error
    })
  },
})
export default tasksSlice.reducer
