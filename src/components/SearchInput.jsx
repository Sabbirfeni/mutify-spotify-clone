import React, { useEffect, useRef } from 'react'
import { fetchMusic, handleSearch } from '../redux/features/musicSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SearchInput() {

    const dispatch = useDispatch()
    const music = useSelector(state => state.music)
    const searchValue = useSelector(state => state.music.searchKeyword)
    const navigate = useNavigate();

    const makeRequest = e => {
      if(e.key === 'Enter') {
        dispatch(fetchMusic({music , searchValue}))
      }
    }

  return (
    <div className='p-5'>
        <input className='p-2' type="text" value={searchValue} 
        onChange={e => { dispatch(handleSearch(e.target.value))}}
        onKeyUp={e => makeRequest(e)}
        />
        {/* <button className='text-white ml-3' type='button' onClick={() => { dispatch(fetchMusic(music)) }}>search</button> */}
    </div>
  )
}
export default SearchInput 