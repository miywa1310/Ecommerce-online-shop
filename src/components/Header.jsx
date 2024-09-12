import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import React, { useState } from 'react'
import logoBlack from '../images/logoBlack.svg'
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSeletedProduct } from "../store/slices/productsSlice";

const Header = () => {
  const { favourite } = useSelector(state => state.products)
  const { cart } = useSelector(state => state.cart)

  const [hideMenu, setHideMenu] = useState(false)
  const { pathname } = useLocation()

  return (
      <header className="h-[80px] flex items-center bg-white">
        <div className="container">
          <div className="flex items-center justify-between gap-[20px]">
            <div className="cursor-pointer">
              <Link to={"/"}>
                <img className="min-w-[100px]" src={logoBlack} alt="" />
              </Link>
            </div>
            <form className="hidden w-[32%] md:flex items-center justify-start text-[#989898] px-[15px] py-[7px] text-[18px] bg-[#F5F5F5] rounded-md gap-[10px]">
              <BiSearch className="text-[20px] " />
              <input type="text" className="outline-none text-gray-500 bg-[#F5F5F5]" placeholder='Enter the name' />
            </form>
            <div className="">
              <ul className="text-[#989898] text-[18px] flex gap-[30px] items-center justify-center ">
                <Link to={"/"} className="hidden sm:block">
                  <li className={`${pathname == "/" ? "text-[#111111]" : ""}`}>Home</li>
                </Link>
                <Link to={"/products"} className="hidden sm:block">
                  <li className={`${pathname == "/products" && "text-[#111111]"}`}>Products</li>
                </Link>
                <Link to={"/favourite"} className="relative">
                  <li className={`text-[24px] ${pathname == "/favourite" && "text-[#111111]"}`}>
                    <AiOutlineHeart />
                    <div className="absolute text-black top-[-11px] right-[-12px] text-[12px] rounded-full bg-gray-100 w-[20px] h-[20px] flex items-center justify-center ">{favourite.length}</div>
                  </li>
                </Link>
                <Link to={"/cart"} className="relative">
                  <li className={`text-[24px] ${pathname == "/cart" && "text-[#111111]"}`}>
                    <AiOutlineShoppingCart />
                    <div className="absolute text-black top-[-11px] right-[-12px] text-[12px] rounded-full bg-gray-100 w-[20px] h-[20px] flex items-center justify-center ">{cart.length}</div>
                  </li>
                </Link>
                <div onClick={() => setHideMenu(prev => prev ? false : true)} className="text-[26px] cursor-pointer block sm:hidden text-black">{hideMenu ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
                {hideMenu &&
                  <div className={`absolute bg-white duration-200 z-10 right-[20px] rounded-md top-[60px] border-[1px] max-h-max w-[150px] flex p-[20px] `}>
                    <div className=""></div>
                    <ul className="text-[#989898] text-[18px] flex flex-col gap-[10px] justify-center ">
                      <Link to={"/"} onClick={()=>setHideMenu(false)} >
                        <li className={`${pathname == "/" ? "text-[#111111]" : ""}`}>Home</li>
                      </Link>
                      <Link to={"/products"} onClick={()=>setHideMenu(false)}>
                        <li className={`${pathname == "/products" && "text-[#111111]"}`}>Products</li>
                      </Link>
                    </ul>
                  </div>}
              </ul>
            </div>
          </div>
        </div>
      </header>

  )
}

export default Header