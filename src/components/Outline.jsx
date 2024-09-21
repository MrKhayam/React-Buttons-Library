import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import OutlineCard from './OutlineCard';


const Simple = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [btnTxt, setBtnTxt] = useState('');

    const handleClick = (btnType) => {
        setIsClicked(true);
        setBtnTxt(btnType);
    }
    const handleCross = () => {
        setIsClicked(false);
    }
  return (
    <>
      <div className="w-[80%] mx-auto h-full overflow-scroll hide-scrollbar">
      <div className={`${isClicked ? 'flex' : 'hidden'} fixed z-20 top-0 left-0 w-full items-center justify-center h-screen bg-[#0000007a] backdrop-blur-sm`}>
            <div className={`w-[900px] relative rounded-lg h-auto p-8 bg-white`}>
                <IoClose className='absolute top-3 text-xl right-3 cursor-pointer' onClick={handleCross} size={27} />
                <h1 className='font-semibold text-xl'>Import</h1>
                <h1 className='bg-black text-[#91C8E4] w-fit p-3 px-5 rounded-lg mt-3 text-lg'><pre>{`import { BtnOutline } from 'react-buttons-library'`}</pre></h1>
                <h1 className='font-semibold text-xl mt-5'>Usage</h1>
                <h1 className='bg-black text-[#91C8E4] w-fit p-3 px-5 rounded-lg mt-3 text-lg'><pre>{`<BtnOutline label='Click Me' btnClass='${btnTxt}' onClick={() => alert('Clicked')} />`}</pre></h1>
            </div>
        </div>
        <h1 className='text-center text-3xl font-semibold'>Simple Buttons</h1>
        <div className="w-full h-auto mt-9 flex justify-center flex-wrap gap-5">
            <OutlineCard handleClick={handleClick} btnType='defaultOut' />
            <OutlineCard handleClick={handleClick} btnType='primaryOut' />
            <OutlineCard handleClick={handleClick} btnType='infoOut' />
            <OutlineCard handleClick={handleClick} btnType='dangerOut' />
            <OutlineCard handleClick={handleClick} btnType='btnWhtOut' />
            <OutlineCard handleClick={handleClick} btnType='btnBlkOut' />
            <OutlineCard handleClick={handleClick} btnType='btnSmp1Out' />
            <OutlineCard handleClick={handleClick} btnType='btnSmp2Out' />
            <OutlineCard handleClick={handleClick} btnType='btnSmp3Out' />
            <OutlineCard handleClick={handleClick} btnType='btnSmp4Out' />
            <OutlineCard handleClick={handleClick} btnType='btnSmp5Out' />
            <OutlineCard handleClick={handleClick} btnType='btnSmp6Out' />
            <OutlineCard handleClick={handleClick} btnType='btnSmp7Out' />
            <OutlineCard handleClick={handleClick} btnType='btnSmp8Out' />
            <OutlineCard handleClick={handleClick} btnType='btnSmp9Out' />
            <OutlineCard handleClick={handleClick} btnType='btnSmp10Out' />

        </div>
      </div>
    </>
  )
}

export default Simple
