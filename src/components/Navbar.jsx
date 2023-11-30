import React, { useEffect, useRef, useState } from 'react'
import { fetchMusic, handleSearch } from '../redux/features/musicSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { IoClose, IoReorderThree } from "react-icons/io5";
import { setMobileMenuOpen } from '../redux/features/mobileMenuSlice'
import { logo } from '../assets/images'

function Navbar() {
    const { mobileMenuOpen } = useSelector(state => state.mobileMenu)
    const dispatch = useDispatch()
    const music = useSelector(state => state.music)
    const searchValue = useSelector(state => state.music.searchKeyword)
    const navigate = useNavigate();

    const makeRequest = e => {
      e.preventDefault();
      if(e.key === 'Enter') {
        navigate('/')
        dispatch(fetchMusic({music , queryValue: searchValue}))

      }
    }

    return (
      <div className='flex flex-row justify-between items-center md:px-4 xl:px-5 px-3 py-2'>
          <div className='flex items-center'>
              
              <div className='lg:hidden flex flex-row items-center mr-4 '>
                <img src={logo} className='w-8' alt="logo" />
                <h4 className='text-sm text-gray-300 ml-2 font-medium logo'>Mutify</h4>
              </div>

              <FiSearch className='w-5 h-5 text-gray-600'/>
              <input
                className='bg-transparent border-none md:w-64 w-40 outline-none placeholder:text-gray-500 text-base text-white p-4'
                name='search-field'
                autoComplete='off'
                id='search-field'
                placeholder='Search'
                type='search'
                value={searchValue}
                onChange={e => { dispatch(handleSearch(e.target.value))}}
                onKeyUp={e => makeRequest(e)}
              />
          </div>
          
          <div className='lg:hidden block'>
            {mobileMenuOpen ? (
                <IoClose className='w-7 h-7 cursor-pointer text-gray-400' onClick={() => dispatch(setMobileMenuOpen(false))}/>
            ) : (
                <IoReorderThree className='w-7 h-7 cursor-pointer text-gray-400' onClick={() => dispatch(setMobileMenuOpen(true))}/>
            )}
          </div>
        </div>
    )

  // return (
  //   <div className='p-5'>
  //       <input className='p-2' type="text" value={searchValue} 
  //       onChange={e => { dispatch(handleSearch(e.target.value))}}
  //       onKeyUp={e => makeRequest(e)}
  //       />
  //       {/* <button className='text-white ml-3' type='button' onClick={() => { dispatch(fetchMusic(music)) }}>search</button> */}
  //   </div>
  // )
}
export default Navbar 