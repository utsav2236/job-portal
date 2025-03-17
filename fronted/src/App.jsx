import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Signup from './components/auth/signup'
import Login from './components/auth/Login'
import Home from './components/Home'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])
const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App