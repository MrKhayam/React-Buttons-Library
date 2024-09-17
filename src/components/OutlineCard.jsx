import { BtnOutline } from 'react-buttons-library'
const OutlineCard = ({btnType, handleClick}) => {
  return (
    <>
        <div className="w-[300px] rounded-xl h-[300px] bg-white flex items-center justify-center">
            <BtnOutline label='Click Me' btnClass={btnType} onClick={()=>handleClick(btnType)} />
        </div>
    </>
  )
}

export default OutlineCard
