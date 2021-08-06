import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Filter = () => {
  return (
    <div>
      <div className='flex justify-between items-center w-full py-4 font-bold'>
      <div className='flex justify-center items-center gap-5'>
        <h1 className='text-xl'>Add Another keyword</h1>
        <span className='p-1 px-4 text-white' 
        style={{background:'#3F0E40'}}
        >1/3</span>
        <span className='uppercase'>Upgrade</span>
      </div>
      <span>Advance search</span>
    </div>
    <div className='p-6 bg-white w-full flex items-center justify-between'>
      <div className='flex gap-5 items-center justify-center'>
        <AiOutlineSearch className='text-2xl'/>
        <input type="text" placeholder='Enter your filters here'
        className='outline-none border-0 text-xl text-black'
        style={{width:'50rem'}}
        />
      </div>
      <button className='p-4 px-6 font-bold text-xl text-white uppercase rounded-md' 
      style={{background:'#3F0E40'}}
      >
        Save filters
      </button>
    </div>
    </div>
  )
}

export default Filter
