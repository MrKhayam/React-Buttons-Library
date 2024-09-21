import React from 'react'

const Installation = () => {
  return (
    <div className='w-[85%] mt-9 mx-auto flex-1'>
        <h1 className='text-2xl font-semibold'>Installation</h1>
        <h1 className="mt-4 text-lg">npm</h1>
        <h1 className='w-96 h-auto px-5 py-3 mt-2 bg-black text-[#91C8E4] rounded-lg'>npm install react-buttons-library</h1>
        <h1 className='mt-10 text-2xl font-semibold'>Import</h1>
        <h1 className='mt-2 bg-black h-auto px-5 py-3 rounded-lg w-[500px] text-[#91C8E4]'>{`import { BtnSimple } from 'react-buttons-library'
`}</h1>
        <h1 className='mt-10 text-2xl font-semibold'>Usage</h1>
        <h1 className='mt-2 bg-black h-auto px-5 py-3 rounded-lg w-[900px] text-[#91C8E4]'><pre>{`import React from 'react'
import { BtnSimple } from 'react-buttons-library'
const App = () => {
  return (
    <div>
        <BtnSimple label='Click Me' btnClass='info' onClick={()=>handleClick(btnType)} />
    </div>
  )
}

export default App`}</pre></h1>
    </div>
  )
}

export default Installation
