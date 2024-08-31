import React from 'react'
import { useSelector } from 'react-redux'
import ProductsCard from './ProductsCard'
import ProCardSkleton from './ProCardSkleton'

const NewArrival = () => {
    const { products, isProductsLoad } = useSelector(state => state.products)
    return (
        <div>
            <div className="container py-[50px]">
                <div >
                    <h2 className='text-[24px]'>New arrival</h2>
                </div>
                <div className="mt-[30px] grid  grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[20px] w-full">
                    {
                        isProductsLoad ?
                            [1, 2, 3, 4].map((item) => (
                                <ProCardSkleton key={item} />
                            )) : products.map((item, index) => {
                                if (index < 8) {
                                    return (
                                        <ProductsCard item={item} key={item.id} />
                                    )
                                }
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default NewArrival