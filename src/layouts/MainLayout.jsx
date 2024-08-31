import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from '../store/slices/productsSlice'
import { fetchCategoryData } from '../store/slices/categoriesSlice'

const MainLayout = () => {
  const dispatch = useDispatch()
  const urlProduct = "https://ecommerce-data-base.onrender.com/products"
  const urlCategory = "https://ecommerce-data-base.onrender.com/categories"
  useEffect(() => {
    dispatch(fetchProductData(urlProduct))
    dispatch(fetchCategoryData(urlCategory))
  }, [])
  
  return (
    <div className='relative'>
      <Header />
      <Content >
        <Outlet />
      </Content>
      <Footer />
    </div>
  )
}

export default MainLayout