import React from 'react'
import ProductsCard from '../components/Page-comp/ProductsCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Favourite = () => {
  const {  favourite } = useSelector(state => state.products)
  if(favourite.length==0){
    return(
        <div className="w-full h-[60vh] flex items-center justify-center  text-center">
          <div className="">
            <img src="https://teedrab.com/images/No-favorites-yet.png" alt="" />
            <p className='text-[#00000080] font-semibold text-[20px]'>You have no favorites</p>
            <p className='text-[#A4A4A4] mb-[10px]'>Save your favorite products here</p>
            <Link to={"/products"}>
              <button className='btn bg-[#3490dc] text-white text-[18px] font-semibold   '>View products</button>
            </Link>
          </div>  
        </div>
    )
  }else{
  return (
    <div>
      <div className="container">
        <div className="my-[30px] w-full items-center justify-center sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex flex-col gap-[20px]">
          {
            favourite.map((item, index) => (
                <ProductsCard item={item} key={item.id} />
            ))

          }
        </div>
      </div>
    </div>
  )
}}

export default Favourite