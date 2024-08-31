import { AiFillInstagram } from "react-icons/ai"; 
import { FaTiktok } from "react-icons/fa"; 
import { CgFacebook } from "react-icons/cg"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import React from 'react'
import logoWhite from '../images/logoWhite.svg'

const Footer = () => {
  return (
    <div className='bg-[#000000] py-[100px]'>
      <div className="container ">
        <div className="flex flex-wrap gap-[30px] justify-between items-start">
          <div className="flex flex-col gap-[20px]">
            <img className='min-w-[100px] max-w-[100px]' src={logoWhite} alt="" />
            <h4 className='text-[#CFCFCF]  max-w-[400px]'>We are a residential interior design firm located in  Portland. Our boutique-studio offers more than</h4>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h4 className='text-white text-[22px]'>Services</h4>
            <ul className='flex flex-col gap-[10px] text-[#CFCFCF]'>
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h4 className='text-white text-[22px]'>Assistance to the buyer</h4>
            <ul className='flex flex-col gap-[10px] text-[#CFCFCF]'>
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>
        </div>
        <div className="mt-[30px]">
            <div className="flex gap-[20px] text-white text-[24px]">
              <AiOutlineTwitter />
              <CgFacebook />
              <FaTiktok />
              <AiFillInstagram />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer