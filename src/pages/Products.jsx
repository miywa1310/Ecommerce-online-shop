import { AiOutlineRight } from "react-icons/ai";
import React, { useRef } from 'react'
import ProductsCard from "../components/Page-comp/ProductsCard";
import ProCardSkleton from "../components/Page-comp/ProCardSkleton";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import filterIcon from '../images/filterIcon.svg'
import { setSeletedProduct } from "../store/slices/productsSlice";


const Products = () => {
  const { products, isProductsLoad, selectedProducts, selectedType, cart, favourite } = useSelector(state => state.products)
  const { categories } = useSelector(state => state.categories)
  const dispatch = useDispatch()
  const category = categories.find(item => item.id == Object.values(selectedProducts)[0]?.categoryId)
  const selectCont = useRef()
  function ShowContent() {
    selectCont.current.classList.toggle("hidden")
  }
  function setSelectingFunc(category) {
    const selectingProduct = products.filter(item => item.categoryId == category.id)
    dispatch(setSeletedProduct(selectingProduct))
    selectCont.current.classList.add("hidden")
  }

  return (
    <div className="mb-[30px]">
      <div className="h-[50px] hidden md:flex bg-[#2E2E2E] items-center">
        <div className="container">
          <div className="flex items-center gap-[20px]">
            <ul className="text-[#989898] divide-x text-[18px] flex items-center justify-between w-full ">
              {
                categories.map(item => (
                  <li onClick={() => setSelectingFunc(item)} key={item.id} className=" w-full flex  items-center justify-center">
                    <div className="py-[3px] px-[10px] flex gap-[10px] rounded-md cursor-pointer hover:bg-gray-700 max-w-max">
                      <p>{item.title}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-[40px]">
          <ul className='flex gap-[20px] items-center text-[18px] text-[#A4A4A4]'>
            <li>Home</li>
            <li><AiOutlineRight /></li>
            <li>Catalog</li>
            <li><AiOutlineRight /></li>
            <li className="text-black">{category ? category.title : "All"}</li>
          </ul>
        </div>
        <div className="">
          <div className="flex justify-between gap-[10px] mb-[30px] items-center">
            <div className="hidden md:block">
              <p className="text-[18px] text-[#A4A4A4]">Selected Products:
                <span className="text-black">
                  {
                    selectedType ? selectedProducts.length : products.length
                  }
                </span>
              </p>
            </div>
            <div className="block md:hidden w-[150px]">
              <div className="flex flex-col gap-1 relative">
                <div onClick={() => ShowContent()} className=" flex p-[3px] justify-between rounded-md border-[1px] px-[10px] flex justify-start items-center gap-2">
                  <p className="text-[18px]">Filters</p>
                  <img className="w-[16px] h-[18px]" src={filterIcon} alt="" />
                </div>
                <div ref={selectCont} className="hidden absolute bottom-0 translate-y-[100%] left-0 bg-white shadow-md rounded-md p-[10px] max-w-max z-[10]">
                  {
                    categories.map(item => (
                      <div onClick={() => setSelectingFunc(item)} key={item.id} className=" w-full flex  items-center justify-start">
                        <div className="w-full py-[3px] px-[10px] flex gap-[10px] rounded-md cursor-pointer hover:bg-gray-100 ">
                          {/* <img className="max-w-[20px]" src={item.icon} alt="" /> */}
                          <p>{item.title}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="my-[30px] flex items-center justify-center flex-col  sm:grid  grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[20px] w-full">
            {
              isProductsLoad ?
                [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <ProCardSkleton key={item} />
                )) :
                !selectedType ?
                  products.map((item) => (
                    <ProductsCard item={item} key={item.id} />
                  )) : selectedProducts.map((item) => (
                    <ProductsCard item={item} key={item.id} />
                  ))
            }
          </div>
        </div>
      </div>
      {/* <Pagination sx={{ display: 'flex', alignItems:"center", justifyContent:"center", width:"100%" }}  count={10} shape="rounded" /> */}
    </div>
  )
}

export default Products