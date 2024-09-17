import { BtnRounded } from 'react-buttons-library'
const RoundedCard = ({btnType, handleClick}) => {
  return (
    <>
        <div className="w-[300px] rounded-xl h-[300px] bg-white flex items-center justify-center">
            <BtnRounded label='Click Me' btnClass={btnType} onClick={()=>handleClick(btnType)} />
        </div>
    </>
  )
}

export default RoundedCard
