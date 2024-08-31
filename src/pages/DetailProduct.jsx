import { FaSpinner } from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";
import { GiHut } from "react-icons/gi";
import { RiTruckLine } from "react-icons/ri";
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import { setFavouriteItem } from '../store/slices/productsSlice'
import ProductsCard from "../components/Page-comp/ProductsCard";
import { setCartItem } from "../store/slices/cartSlice";
import Favourite from "./Favourite";

const DetailProduct = () => {
    const { pathname } = useLocation()
    const { products, favourite } = useSelector(state => state.products)
    const { cart } = useSelector(state => state.cart)
    const { categories } = useSelector(state => state.categories)

    const params = useParams()
    const [selectDetailProduct] = products.filter(item => `${item?.slug}-${item?.id}` === params.slug)
    const dispatch = useDispatch()
    const category = categories.find(item => item.id == selectDetailProduct?.categoryId)
    const relatedProducts = products.filter(item => item.categoryId == category?.id)

    const [image, setImage] = useState(selectDetailProduct?.images[0])

    function selectImage(src) {
        setImage(src)
    }
    function setColor(color) {
        alert("Your selected color is " + color)
    }
    const descriptionText = useRef()
    const descriptionText2 = useRef()
    function description(desc) {
        let miniDesc = ""
        if (desc?.length > 100) {
            for (let i = 0; i < 100; i++) {
                miniDesc += desc[i]
            }
        } else {
            miniDesc = desc
        }
        return miniDesc
    }
    useEffect(() => {
        setImage(selectDetailProduct?.images[0])
    }, [pathname])

    function moreDesc() {
        descriptionText.current.classList.add("hidden")
        descriptionText2.current.classList.remove("hidden")
        descriptionText2.current.classList.add("block")

    }


    return (
        <div className="">
            {selectDetailProduct ?
                <div className="container">
                    <div className="py-[40px] hidden sm:block">
                        <ul className='flex gap-[20px] items-center text-[18px] text-[#A4A4A4]'>
                            <li>Home</li>
                            <li><AiOutlineRight /></li>
                            <li>Catalog</li>
                            <li><AiOutlineRight /></li>
                            <li>{category?.title}</li>
                            <li><AiOutlineRight /></li>
                            <li className="text-black">{selectDetailProduct?.name}</li>
                        </ul>
                    </div>

                    <div className="flex gap-[30px] items-center justify-center py-[50px] flex-col md:flex-row">
                        <div className="flex-[1.5] w-full flex flex-col-reverse sm:flex-row gap-[20px] items-center justify-center">
                            <div className="flex sm:flex-col sm:gap-[20px] gap-[10px] items-center justify-between w-full sm:w-auto  ">

                                {
                                    selectDetailProduct?.images.map((item, index) => (
                                        <div key={index} onClick={() => selectImage(item)} className="max-w-[80px] h-[103px] cursor-pointer group">
                                            <img className='rounded-md object-cover group-hover:scale-95' src={item} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="">
                                <img className='rounded-md h-[516px]' src={image} alt="" />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-[20px]">
                            <h1 className='text-[32px] font-semibold'>{selectDetailProduct?.name}</h1>
                            <h1 className='text-[28px]'>${selectDetailProduct?.price}</h1>

                            <div className="flex gap-[10px] items-center justify-start">
                                <p>Select color :</p>
                                <div onClick={() => setColor("Black")} className="bg-black cursor-pointer active:scale-95 min-[360px]:w-[32px] min-[360px]:h-[32px] w-[25px] h-[25px] rounded-full "></div>
                                <div onClick={() => setColor("Purple")} className="bg-[#781DBC] cursor-pointer active:scale-95 min-[360px]:w-[32px] min-[360px]:h-[32px] w-[25px] h-[25px] rounded-full "></div>
                                <div onClick={() => setColor("Red")} className="bg-[#E10000] cursor-pointer active:scale-95 min-[360px]:w-[32px] min-[360px]:h-[32px] w-[25px] h-[25px] rounded-full "></div>
                                <div onClick={() => setColor("Yellow")} className="bg-[#E1B000] cursor-pointer active:scale-95 min-[360px]:w-[32px] min-[360px]:h-[32px] w-[25px] h-[25px] rounded-full "></div>
                                <div onClick={() => setColor("Silver")} className="bg-[#E8E8E8] cursor-pointer active:scale-95 min-[360px]:w-[32px] min-[360px]:h-[32px] w-[25px] h-[25px] rounded-full "></div>
                            </div>
                            <div ref={descriptionText} className="text-[#6C6C6C]  ">{description(selectDetailProduct?.description)} <span onClick={() => moreDesc()} className='text-[#2C2C2C] text-[18px] underline cursor-pointer active:scale-95'>more...</span></div>
                            <div ref={descriptionText2} className="text-[#6C6C6C]  hidden">{selectDetailProduct?.description}</div>
                            <div className="flex justify-between flex-col gap-[20px] sm:flex-row">
                                <button onClick={() => dispatch(setFavouriteItem(selectDetailProduct))} className="px-[20px] active:scale-95 py-[10px] rounded-md sm:max-w-max  text-black border-[1px] border-black text-[18px]">{
                                    !favourite.find(item => item.id == selectDetailProduct.id)?"Add to Wishlist":"Delete from Wishlist"}</button>
                                {
                                    cart.find(item => item.id == selectDetailProduct.id) ?
                                        <Link to={"/cart"}>
                                            <button  className="px-[20px] active:scale-95 py-[10px] rounded-md w-full sm:max-w-max bg-black text-white text-[18px]">View cart</button>
                                        </Link>:
                                        <button onClick={() => dispatch(setCartItem(selectDetailProduct))} className="px-[20px] active:scale-95 py-[10px] rounded-md sm:max-w-max bg-black text-white text-[18px]">Add to Card</button>
                                }
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-[12px] flex-col sm:flex-row justify-center items-center">
                                    <div className="bg-[#F6F6F6] text-gray-500 text-[26px] p-[10px] rounded-md">
                                        <RiTruckLine />
                                    </div>
                                    <div className="">
                                        <p className="text-[#717171]">Free Delivery</p>
                                        <p>1-2 day</p>
                                    </div>
                                </div>
                                <div className="flex gap-[12px] flex-col sm:flex-row justify-center items-center">
                                    <div className="bg-[#F6F6F6] text-gray-500 text-[26px] p-[10px] rounded-md">
                                        <GiHut />
                                    </div>
                                    <div className="">
                                        <p className="text-[#717171]">In Stock </p>
                                        <p>Today</p>
                                    </div>
                                </div>
                                <div className="flex gap-[12px] flex-col sm:flex-row justify-center items-center">
                                    <div className="bg-[#F6F6F6] text-gray-500 text-[26px] p-[10px] rounded-md">
                                        <BiBadgeCheck />
                                    </div>
                                    <div className="">
                                        <p className="text-[#717171]">Guaranteed</p>
                                        <p>1 year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-[50px] ">
                        <h1 className="text-[24px]">Related Products</h1>
                        <div className="my-[30px] flex items-center justify-center flex-col  sm:grid  grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[20px] w-full">
                            {
                                relatedProducts.map((item, index) => {
                                    if (index < 4) {
                                        return (
                                            <ProductsCard key={item.id} item={item} />
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>

                </div> :
                <div className="h-[70vh] flex items-center justify-center w-full gap-[20px] text-[30px] "><FaSpinner className="animate-spin" /> <span> Loading...</span></div>}
        </div>
    )
}

export default DetailProduct