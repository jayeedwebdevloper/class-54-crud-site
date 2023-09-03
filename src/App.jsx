
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import AddProducts from './components/Add-Products/AddProducts'
import Update from './components/Update/Update'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:3000/products')
    },
    {
      path: '/add-product',
      element: <AddProducts></AddProducts>
    },
    {
      path: '/update/:id',
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`)
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
