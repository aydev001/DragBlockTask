import { BiSearch } from "react-icons/bi"; 
import { useDispatch } from "react-redux";
import { changeSearchId } from "../../app/orderCard/orderCardSlice";

const SearchInput = () => {
  const dispatch = useDispatch()
  return (
    <form className='relative border-[1px] rounded-md border-gray-300'>
        <div className='absolute left-[3px] top-0 bottom-0 text-[18px] text-blue-600 w-[25px] flex justify-center items-center'>
            <BiSearch />
        </div>
        <input onChange={(e) => dispatch(changeSearchId(+e.target.value))} className='pl-[30px] pr-[10px] rounded-md text-[14px] font-light py-[5px] placeholder:text-[14px] placeholder:font-light outline-blue-600' type="number" placeholder='Поиск по ID'/>
    </form>
  )
}

export default SearchInput
