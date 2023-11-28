import React, { useEffect, useRef } from 'react'
import { fetchMusic, handleSearch } from '../redux/features/musicSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

function SearchInput() {

    const dispatch = useDispatch()
    const music = useSelector(state => state.music)
    const searchValue = useSelector(state => state.music.searchKeyword)
    const navigate = useNavigate();

    const makeRequest = e => {
      if(e.key === 'Enter') {
        navigate('/')
        dispatch(fetchMusic({music , queryValue: searchValue}))

      }
    }

    return (
      <form action="" autoComplete='off' className='p-2 text-gray-400 focus-within:text-gray-600'>
        <label htmlFor="serch-field" className='sr-only'>Search all songs</label>
        <div className='flex flex-row justify-start items-center'>
          <FiSearch className='w-5 h-5 ml-4'/>
          <input
            className='flex-1 bg-transparent border-none outline-none placeholder:text-gray-500 text-base text-white p-4'
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
      </form>
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
export default SearchInput 