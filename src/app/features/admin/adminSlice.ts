import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from '../../../services/auth.services'
import { DataLogin } from '../../../utils/interface'

interface userState {
  user: {}
  status: 'idle' | 'loading' | 'sucess' | 'failed'
  error?: string
}

const initialState = {
  user: {},
  status: 'idle',
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

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = 'sucess'
      payload.user && (state.user = payload.user)
    })
    builder.addCase(login.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(login.rejected, (state, { payload }) => {
      state.status = 'failed'
      payload && (state.error = payload)
    })
  },
})

export default userSlice.reducer
