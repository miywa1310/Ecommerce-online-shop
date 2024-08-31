import React from 'react'
import mainBg from '../../images/mainBg.svg'
import { Link } from 'react-router-dom'

const HomeMain = () => {
    return (
        <div className='bg-[#211C24] text-white h-[90vh] w-full overflow-hidden py-[50px] '>
            <div className="container flex flex-col md:flex-row gap-[30px] justify-start ">
                <div className="flex-1 w-full h-[80vh]  flex items-center justify-start ">
                    <div className="flex flex-col ">
                        <span className='text-[25px] text-gray-400'>Pro.Beyond.</span>
                        <h1 className='text-[50px] md:text-[78px] font-thin text-gray-300 '>IPhone 14 <span className='font-semibold text-white'>Pro</span></h1>
                        <p className='text-gray-400 mb-[20px]'>Created to change everything for the better. For everyone</p>
                        <Link to={"/products"}>
                            <button className='btn max-w-max bg-[#211C24] text-white font semibold border-[1px] border-white'>Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 w-full  flex items-center justify-center flex-col">
                    <div className="">
                        <img className='' src={mainBg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMain