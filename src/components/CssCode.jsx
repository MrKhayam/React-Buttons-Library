import React from 'react'
import { IoMdCopy } from "react-icons/io";

const CssCode = () => {
  return (
    <>
    <div className='bg-black p-5 mt-10 w-[80%] relative mx-auto h-[600px] rounded-lg'>
      <div className="flex gap-2 cursor-pointer items-center absolute top-3 right-5">
      <IoMdCopy color='white' size={22}  />
      <h1 className='text-white text-sm'>Copy Code</h1>
      </div>
      </div>
    </>
  )
}

export default CssCode
