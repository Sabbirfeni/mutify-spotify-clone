import React from 'react'
import { fetchMusic, handleSearch } from '../redux/features/musicSlice'
import { useDispatch, useSelector } from 'react-redux'

function SearchInput() {

    const dispatch = useDispatch()
    const music = useSelector(state => state.music)
    const inputValue = useSelector(state => state.music.searchKeyword)
  return (
    <div>
        <input type="text" value={inputValue} onChange={e => { dispatch(handleSearch(e.target.value)) }}/>
        <button type='button' onClick={() => { dispatch(fetchMusic(music)) }}>search</button>
    </div>
  )
}
export default SearchInput 