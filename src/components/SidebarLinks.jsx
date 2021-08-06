import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLinks = ({icon, text}) => {
  return (
    <NavLink activeStyle={{
      background:'#3F0E40',
      color: 'white'
    }} className='flex items-center gap-10 px-8 py-4 text-black text-opacity-50 font-bold' to={`/${text.replaceAll(' ', '-').toLowerCase()}`}>
       <span className='text-xl'>{icon}</span>
       <span>{text}</span>
    </NavLink>
  )
}

export default SidebarLinks
