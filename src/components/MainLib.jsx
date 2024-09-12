import React from 'react'
import Installation from './Installation'
import {
    Routes,Route,
  } from "react-router-dom";
import Simple from './Simple';
import Large from './Large';
import Small from './Small';
import Outline from './Outline';
import Rounded from './Rounded';

const MainLib = () => {
  return (
    <>
        <div className="w-[84%] rounded-3xl flex flex-col overflow-scroll hide-scrollbar h-[95%] bg-[#dadada]">
            <h1 className='w-full text-center text-5xl text-[#36454F] font-semibold my-5'>React Buttons Library</h1>
            <Routes>
                <Route path='/' element={<Installation />} />
                <Route path='/simple' element={<Simple />}/>
                <Route path='/large' element={<Large />}/>
                <Route path='/small' element={<Small />}/>
                <Route path='/outline' element={<Outline />}/>
                <Route path='/rounded' element={<Rounded />}/>
            </Routes>
        </div>
    </>
  )
}

export default MainLib
