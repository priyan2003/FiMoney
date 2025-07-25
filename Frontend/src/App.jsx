import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/login'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
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
    },
    {
      path: '/addproduct',
      element:<AddProduct/>
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
