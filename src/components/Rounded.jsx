import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import RoundedCard from './RounedCard';


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
                <h1 className='bg-black text-[#91C8E4] w-fit p-3 px-5 rounded-lg mt-3 text-lg'><pre>{`import { BtnRounded } from 'react-buttons-library'`}</pre></h1>
                <h1 className='font-semibold text-xl mt-5'>Usage</h1>
                <h1 className='bg-black text-[#91C8E4] w-fit p-3 px-5 rounded-lg mt-3 text-lg'><pre>{`<BtnRounded label='Click Me' btnClass='${btnTxt}' onClick={() => alert('Clicked')} />`}</pre></h1>
            </div>
        </div>
        <h1 className='text-center text-3xl font-semibold'>Simple Buttons</h1>
        <div className="w-full h-auto mt-9 flex justify-center flex-wrap gap-5">
            <RoundedCard handleClick={handleClick} btnType='default' />
            <RoundedCard handleClick={handleClick} btnType='primary' />
            <RoundedCard handleClick={handleClick} btnType='info' />
            <RoundedCard handleClick={handleClick} btnType='danger' />
            <RoundedCard handleClick={handleClick} btnType='btnWht' />
            <RoundedCard handleClick={handleClick} btnType='btnBlk' />
            <RoundedCard handleClick={handleClick} btnType='btnSmp1' />
            <RoundedCard handleClick={handleClick} btnType='btnSmp2' />
            <RoundedCard handleClick={handleClick} btnType='btnSmp3' />
            <RoundedCard handleClick={handleClick} btnType='btnSmp4' />
            <RoundedCard handleClick={handleClick} btnType='btnSmp5' />
            <RoundedCard handleClick={handleClick} btnType='btnSmp6' />
            <RoundedCard handleClick={handleClick} btnType='btnSmp7' />
            <RoundedCard handleClick={handleClick} btnType='btnSmp8' />
            <RoundedCard handleClick={handleClick} btnType='btnSmp9' />
            <RoundedCard handleClick={handleClick} btnType='btnSmp10' />
        </div>
      </div>
    </>
  )
}

export default Simple
