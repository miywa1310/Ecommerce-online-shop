import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Favourite from './pages/Favourite'
import DetailProduct from './pages/DetailProduct'
import NotFoundPage from './components/Page-comp/NotFoundPage'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/products/:slug' element={<DetailProduct/>} />
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App