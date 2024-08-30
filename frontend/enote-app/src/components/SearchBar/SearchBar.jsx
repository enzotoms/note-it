import React from 'react'
import { TbReportSearch } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";


const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className='w-80 flex items-center px-4 bg-slate-100 rounded-md'>
        <input
        type='text'
        placeholder='Search for Notes'
        value={value}
        className='w-full text-xs bg-transparent py-[11px] outline-none'
        onChange={onChange}
        />

          {value && (
            <IoMdClose className='text-xl text-slate-500 cursor-pointer hover:text-black mr-3' 
            onClick={onClearSearch} 
            />
          )}

        <TbReportSearch 
        size={25}
        className='text-slate-400 cursor-pointer hover:text-black '
        onClick={handleSearch}
        />
    </div>
  )
}

export default SearchBar;