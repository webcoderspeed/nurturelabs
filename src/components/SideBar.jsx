import React from 'react';
import Logo from '../images/Logo.svg';
import SidebarLinks from './SidebarLinks';
import { AiFillHome } from 'react-icons/ai';
import { MdGroup } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { MdArrowDropDown } from 'react-icons/md';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className='bg-white w-72 flex flex-col gap-5'>
      <div className="flex items-center justify-center p-4" style={{color:'#3F0E40'}}>
        <img src={Logo} alt="Team Monitor" />
        <h1 className='text-xl font-bold'>Team<span className='text-2xl font-extrabold'>Monitor</span></h1>
      </div>
        <div>
          <SidebarLinks icon={<AiFillHome />} text="Add Keywords"/>
          <SidebarLinks icon={<MdGroup />} text="Matches" />
          <SidebarLinks icon={<MdPayment />} text="Manage Sources" />
          <SidebarLinks icon={<MdPayment />} text="Integration" />
          <SidebarLinks icon={<MdPayment />} text="Alerts" />
        </div>
      <Link to='/setting' className='flex items-center justify-between px-4 text-gray-600  font-bold text-opacity-90'>
        <BsFillStarFill />
        <h1>Setting</h1>
        <MdArrowDropDown />
      </Link>
      <Link to='/billing' className='text-gray-600 px-8 font-bold text-opacity-80'>Billings</Link>
    </div>
  )
}

export default SideBar
