import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import Home from './components/Home'
import ByProduct from './components/ByProduct'
import Login from './components/Login'
const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element:<Home/>
    },
    {
      path: '/signup',
      element:<Signup/>
    },
    {
      path: '/login',
      element:<Login/>
    },
    {
      path: '/addproduct',
      element:<AddProduct/>
    },
    {
      path: '/byproduct',
      element:<ByProduct/>
    },
    {
      path: '/updateproduct/:productId',  // <-- dynamic route for updating
      element: <UpdateProduct />
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
