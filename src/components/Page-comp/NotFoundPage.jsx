import React from 'react'
import { TbNotesOff } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className=' container text-[30px] text-gray-500 font-bold gap-2  flex-col flex justify-center items-center h-[70vh] w-full'>
        <TbNotesOff />
        <h2 className=' '>Page Not Found</h2>
        <Link to={"/"}><button className="px-[20px] py-[10px] rounded-md sm:max-w-max  text-black border-[2px] border-black text-[18px]">Go Home</button></Link>
    </div>
  )
}

export default NotFoundPage