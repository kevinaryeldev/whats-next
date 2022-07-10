import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from '../../../services/auth.services'
import { DataLogin, DataRegister } from '../../../utils/interface'

interface userState {
  user: {}
  status: {
    login: 'idle' | 'loading' | 'sucess' | 'failed'
    update: 'idle' | 'loading' | 'sucess' | 'failed'
    register: 'idle' | 'loading' | 'sucess' | 'failed'
  }
  error?: string
  isLoggedIn: boolean
}

const initialState = {
  user: {},
  status: {
    login: 'idle',
    update: 'idle',
    register: 'idle',
  },
  isLoggedIn: false,
} as userState

export const login = createAsyncThunk(
  'auth/login',
  async (data: DataLogin, thunkApi) => {
    return await authService
      .login(data)
      .then((response) => {
        return response
      })
      .catch((e) => thunkApi.rejectWithValue(e.response.data))
  }
)

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data: DataRegister, thunkApi) => {
    return await authService
      .register(data)
      .then((response) => {
        return response
      })
      .catch((e) => thunkApi.rejectWithValue(e.response.data))
  }
)

export const updateUser = createAsyncThunk(
  'auth/update',
  async (data: DataLogin, thunkApi) => {
    return await authService
      .update(data)
      .then((response) => {
        return response
      })
      .catch((e) => thunkApi.rejectWithValue(e.response.data))
  }
)

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status.login = 'sucess'
      payload.user && (state.user = payload.user)
      state.isLoggedIn = true
    })
    builder.addCase(login.pending, (state) => {
      state.status.login = 'loading'
    })
    builder.addCase(login.rejected, (state, { payload }) => {
      state.status.login = 'failed'
      payload && (state.error = payload)
    })
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.status.register = 'sucess'
      payload.user && (state.user = payload.user)
      state.isLoggedIn = true
    })
    builder.addCase(registerUser.pending, (state) => {
      state.status.register = 'loading'
    })
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.status.register = 'failed'
      payload && (state.error = payload)
    })
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.status.update = 'sucess'
    })
    builder.addCase(updateUser.pending, (state) => {
      state.status.update = 'loading'
    })
    builder.addCase(updateUser.rejected, (state, { payload }) => {
      state.status.update = 'failed'
    })
  },
})

export default userSlice.reducer
