import React from 'react'
import Card from './Card'

const Simple = () => {
  return (
    <>
      <div className="w-[80%] mx-auto h-full overflow-scroll hide-scrollbar">
        <h1 className='text-center text-3xl font-semibold'>Simple Buttons</h1>
        <div className="w-full h-auto mt-9 flex flex-wrap gap-5">
            <Card btnType='lgOut' />
            <Card btnType='smOut' />
            <Card btnType='lgOutFl' />
            <Card btnType='smOutFl' />
            <Card btnType='blackLg' />
            <Card btnType='blackSm' />
            <Card btnType='blackSmFl' />
            <Card btnType='blackLgFl' />
        </div>
      </div>
    </>
  )
}

export default Simple
