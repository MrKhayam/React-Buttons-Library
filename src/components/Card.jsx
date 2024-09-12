import React from 'react'
import { Button } from 'react-buttons-library'
const Card = ({btnType}) => {
  return (
    <>
        <div className="w-[300px] rounded-xl h-[300px] bg-white flex items-center justify-center">
            <Button label='Click Me' btnClass={btnType} onClick={() => alert('I am Clicked')} />
        </div>
    </>
  )
}

export default Card
