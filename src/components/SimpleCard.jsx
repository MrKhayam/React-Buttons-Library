import { BtnSimple } from 'react-buttons-library'
const SimpleCard = ({btnType, handleClick}) => {
  return (
    <>
        <div className="w-[300px] rounded-xl h-[300px] bg-white flex items-center justify-center">
            <BtnSimple label='Click Me' btnClass={btnType} onClick={()=>handleClick(btnType)} />
        </div>
    </>
  )
}

export default SimpleCard
