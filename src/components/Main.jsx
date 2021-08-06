import React from 'react'
import Filter from './Filter'
import Header from './Header'
import Tracking from './Tracking';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='flex-1'>
      <Header />
      <div className='p-12 flex flex-col items-center gap-10' 
      style={{
        background: '#E5E5E5'
      }}
      >
        <Filter />
        <Tracking />
        <Link to='/results'
        className='text-xl font-bold uppercase px-4 py-2 rounded-md text-white'
        style={{
          background: '#3F0E40'
        }}
        >view Results</Link>
      </div>
    </div>
  )
}

export default Main
