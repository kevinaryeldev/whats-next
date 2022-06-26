import { Route, Routes } from 'react-router-dom'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element{<LandingPage/>} />
    </Routes>
  )
}
export default PageRoutes