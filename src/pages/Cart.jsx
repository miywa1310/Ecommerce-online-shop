import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from '../store/slices/productsSlice'
import { calculateTotalAmount, deleteFromCart, dicrement, increment } from '../store/slices/cartSlice'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Cart = () => {
  const { cart, totalAmount } = useSelector(state => state.cart)
  const urlProduct = "https://ecommerce-data-base.onrender.com/products"
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductData(urlProduct))
    dispatch(calculateTotalAmount())
  }, [cart])

  if (cart.length == 0) {
    return (
      <div className="min-h-[60vh] w-[90%] lg:w-[85%] mx-auto my-0 text-center flex flex-col justify-center items-center mb-[20px] ">
        <img className="w-[350px]" src="https://www.omegafoods.in/images/emptycart2.jpg" alt="" />
        <p className="text-[16px] text-gray-500 mb-[10px] max-w-[80%] md:max-w-[40%]">Your Cart is empty! You have no items added in the cart.  Explore and add products you like!
        </p>
        <Link to={"/products"}><button className="px-[20px] py-[10px] rounded-md sm:max-w-max  text-black border-[2px] border-black text-[18px]">View products</button></Link>
      </div>
    )
  }
  return (
    <div className='container py-[50px]'>
      <h1 className="text-[28px] mb-[30px] font-bold">Shopping Cart</h1>
      <div className=" flex gap-[50px] lg:flex-row flex-col ">
        <div className=" flex-1 flex flex-col w-full items-start gap-[10px] rounded-md sm:p-[20px]">
          {
            cart.map(item => (
              <div key={item.id} className='cartDiv pb-[20px] border-b-[1px] '>
                <div className="flex items-center justify-center  gap-4 w-full ">
                  <div className="flex flex-1 items-center p-3  rounded-lg">
                    <img className="rounded-md  " src={item.images[0]} alt="" />
                  </div>
                  <div className="flex flex-[3] flex-col gap-[10px] w-full ">
                    <div className="flex w-full  justify-between">
                      <h4 className=" sm:text-[22px] font-bold ">{item.name}</h4>
                      <button onClick={() => dispatch(deleteFromCart(item))} className="text-[24px] text-red-500 ">
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                    <div className="flex w-full  justify-between">
                      <h4 className="text-[24px]">${item.price}</h4>
                      <div className="flex gap-[20px] text-[18px] font-semibold rounded-[20px] px-[20px] py-[7px] bg-gray-200">
                        <div onClick={() => dispatch(dicrement(item))} className="cursor-pointer">-</div>
                        <p>{item.amount}</p>
                        <div onClick={() => dispatch(increment(item))} className="cursor-pointer">+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }


        </div>


        <div className="flex flex-1 flex-col w-full items-start gap-[10px] border-[1px] max-h-[600px] rounded-md p-[20px]">
          <div className=" flex flex-col gap-[20px] w-full">
            <h2 className="text-black font-bold text-[24px]" >Order Summary</h2>
            <div className="w-full flex flex-col gap-[20px]">
              <div className="w-full">
                <p className="mb-[10px]">Discount code / Promo code</p>
                <div className="w-full ">
                  <input className="rounded-md w-full p-[16px] border outline-none" type="text" placeholder="Code" />
                </div>
              </div>
              <div className="w-full">
                <p className="mb-[10px]">Your bonus card number</p>
                <div className="w-full flex rounded-md w-full p-[16px] border">
                  <input required className=" w-full outline-none" type="text" placeholder="Enter Card Number" />
                  <button type='submit' className='active:scale-95 px-[20px] py-[5px] rounded-md text-black border border-black text-[18px]'>Apply</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] ">
              <div className=" flex justify-between">
                <p className='text-black font-bold text-[18px]'>Subtotal</p>
                <p>${totalAmount}</p>
              </div>
              <div className=" flex justify-between">
                <p>Estimated Tax</p>
                <p>$25</p>
              </div>
              <div className=" flex justify-between">
                <p>Estimated shipping & Handling</p>
                <p>$14</p>
              </div>
              <div className=" flex justify-between">
                <h4 className="text-black font-bold text-[20px]">Total</h4>
                <p>${totalAmount + 25 + 14}</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-end">
            <button className="p-[10px] text-[18px] mt-[20px] rounded-md hover:bg-gray-800 active:scale-95 text-white w-full bg-black ">Checkout</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart