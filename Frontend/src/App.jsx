import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/login'
const appRouter = createBrowserRouter(
  [
    // {
    //   path: '/',
    //   element:<Home/>
    // },
    {
      path: '/signup',
      element:<Signup/>
    },
    {
      path: '/login',
      element:<Login/>
    }
  ]
)
function App() {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
