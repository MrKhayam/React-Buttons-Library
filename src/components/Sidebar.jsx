import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <div className="bg-[#dadada] relative rounded-3xl w-[15%] h-[95%] px-3">
            <div className="logo mt-7 text-center py-4 rounded-xl text-[#91C8E4] text-lg font-semibold cursor-pointer bg-white w-full h-auto flex items-center justify-center gap-3">
                <img className='w-10' src="/icon.webp" alt="" />
                <h1>React Buttons</h1>
            </div>
            <ul className='flex flex-col gap-7 h-auto mt-7'>
                <NavLink to='/' className={({isActive}) => `cursor-pointer ml-2 transition-all duration-200 hover:text-[#91C8E4] ${isActive ? "text-[#91C8E4]" : null}`}>Installation</NavLink>
                <NavLink to='/simple' className={({isActive}) => `cursor-pointer ml-2 transition-all duration-200 hover:text-[#91C8E4] ${isActive ? "text-[#91C8E4]" : null}`}>Simple</NavLink>
                <NavLink to='/large' className={({isActive}) => `cursor-pointer ml-2 transition-all duration-200 hover:text-[#91C8E4] ${isActive ? "text-[#91C8E4]" : null}`}>Large</NavLink>
                <NavLink to='/small' className={({isActive}) => `cursor-pointer ml-2 transition-all duration-200 hover:text-[#91C8E4] ${isActive ? "text-[#91C8E4]" : null}`}>Small</NavLink>
                <NavLink to='/rounded' className={({isActive}) => `cursor-pointer ml-2 transition-all duration-200 hover:text-[#91C8E4] ${isActive ? "text-[#91C8E4]" : null}`}>Rounded</NavLink>
                <NavLink to='/outline' className={({isActive}) => `cursor-pointer ml-2 transition-all duration-200 hover:text-[#91C8E4] ${isActive ? "text-[#91C8E4]" : null}`}>Outline</NavLink>
            </ul>

            <div className="githubInfo bottom-7 self-center ml-3 absolute w-full h-auto flex items-center gap-4">
                <img className='w-10' src="/github.png" alt="" />
                <h1 className='text-lg cursor-pointer'>Github Repository</h1>
            </div>
        </div>
    </>
  )
}

export default Sidebar
