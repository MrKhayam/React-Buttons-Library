import React, { useState } from 'react'
import Installation from './Installation'
import {
    Routes,Route,
  } from "react-router-dom";
import Simple from './Simple';
import Outline from './Outline';
import Rounded from './Rounded';
import Custom from './Custom';

const MainLib = () => {
  return (
    <>
        <div className="flex-1 rounded-3xl flex flex-col overflow-scroll hide-scrollbar h-[95%] bg-[#dadada]">
            <h1 className='w-full text-center text-5xl text-[#36454F] font-semibold my-5'>React Buttons Library</h1>
            <Routes>
                <Route path='/' element={<Installation />} />
                <Route path='/simple' element={<Simple />}/>
                <Route path='/outline' element={<Outline />}/>
                <Route path='/rounded' element={<Rounded />}/>
                <Route path='/custom/*' element={<Custom />}/>
            </Routes>
        </div>
    </>
  )
}

export default MainLib
