import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <div
    style={{background: '#3F0E40'}}
    className='flex justify-between px-20 py-6 items-center text-white'>
      <h1 className='text-2xl font-bold uppercase'>Keywords</h1>
      <form className='flex justify-center items-center gap-5'>
        <input style={{width:'20rem'}}
        type="text" className='text-black relative rounded-md outline-none border-0 p-2'/>
        <button 
        style={{color:'#3F0E40'}}
        className='border-0 outline-none uppercase font-bold absolute ml-40 flex gap-2 items-center'>Submit<AiOutlineArrowRight/>
        </button>
      <Link to='/' 
      style={{color:'#3F0E40'}}
      className='font-bold rounded-full p-2 bg-white h-10 w-10 flex justify-center items-center'  
      >
        A
      </Link>
      </form>
    </div>
  )
}

export default Header
