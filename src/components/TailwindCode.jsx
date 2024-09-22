import React from 'react'
import { IoMdCopy } from "react-icons/io";


const TailwindCode = () => {
  return (
    <>
      <div className='bg-black p-5 mt-10 w-[80%] mx-auto h-[600px] overflow-scroll relative hide-scrollbar rounded-lg'>
      <div className="flex gap-2 cursor-pointer items-center absolute top-3 right-5">
      <IoMdCopy color='white' size={22}  />
      <h1 className='text-white text-sm'>Copy Code</h1>
      </div>
      </div>
    </>
  )
}

export default TailwindCode
