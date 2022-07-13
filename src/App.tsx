import { useEffect } from 'react'
import { getUserdata } from './app/features/admin/adminSlice'
import { useAppDispatch } from './app/hooks'
import PageRouter from './PageRouter'

const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserdata())
  }, [])
  return (
    <div className="App">
      <PageRouter />
    </div>
  )
}

export default App
