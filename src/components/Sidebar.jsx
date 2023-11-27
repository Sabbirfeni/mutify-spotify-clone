import React, { useState } from 'react'
import { links } from '../assets/constants'
import { NavLink } from 'react-router-dom'
import { IoClose, IoReorderThree } from "react-icons/io5";

function Sidebar() {
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)
    
    const NavLinks = ({handleClick}) => (
        <div className='mt-10 text-white'>
            {links.map(item => (
                <NavLink 
                key={item.name} 
                to={item.to} 
                className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
                onClick={() => handleClick && handleClick()}
                >
                    <item.icon className='w-6 h-6 mr-2'/>
                    {item.name}
                </NavLink>
            ))}
        </div>
    ) 
  return (
    <>
        <div className='md:flex hidden flex-col w-[240px] py-10 px-4'>
            <NavLinks/>
        </div>
        <div className='absolute md:hidden block top-6 right-3'>
            {mobileMenuOpen ? (
                <IoClose className='w-6 h-6 cursor-pointer' onClick={() => setMobileMenuOpen(false)}/>
            ) : (
                <IoReorderThree className='w-6 h-6 cursor-pointer' onClick={() => setMobileMenuOpen(true)}/>
            )}
        </div>
        <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden
            smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
                <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
        </div>
    </>
    
  )
}

export default Sidebar