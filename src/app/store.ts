import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/admin/adminSlice'
import tasksReducer from './features/tasks/tasksSlice'
export const store = configureStore({
  reducer: { user: userReducer, tasks: tasksReducer },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
