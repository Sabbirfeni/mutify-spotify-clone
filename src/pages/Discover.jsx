import React, { useEffect, useRef, useState } from 'react'
import { Loader, Error, SongCard } from '../components'
import { genres } from '../assets/constants'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMusic, fetchToken, handleSearch } from '../redux/features/musicSlice'
 


 
function Discover() { 
  const dispatch = useDispatch() 
  const music = useSelector(state => state.music)
  const {isPlaying, activeSong } = useSelector(state => state.player)
  const searchValue = useSelector(state => state.music.searchKeyword)
  const { allMusic, isLoading, error, token } = music
  const [ genreValue, setGenreValue ] = useState('')
  const divRef = useRef(null)
 
  const fetchMusicOnGenreChange = e => {
    dispatch(handleSearch(''))
    const inputValue = e.target.value;
    setGenreValue(inputValue)
    dispatch(fetchMusic({ music, queryValue: inputValue }))
  }

  useEffect(() => {  

      dispatch(fetchToken())

      dispatch(fetchMusic({ music, queryValue: searchValue }))

      
  }, [])
     
   
  if(isLoading) return <Loader/>
  if(error) return <Error/> 
  if(allMusic) return (  
    <div ref={divRef} className='flex flex-col mt-12 pt-12'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col px-4 mb-10'>
          <h2 className='font-bold text-3xl text-white text-left'>
            Discover <span className='text-red-500'>{searchValue !== '' ? searchValue : genreValue}</span>
          </h2>
          <select className='bg-slate-800 text-gray-300 px-3 py-2 text-sm rounded-lg outline-none sm:mt-0 mt-5'
            onChange={(e) => fetchMusicOnGenreChange(e)}
            value={genreValue}
          >
            {genres.map(genre => {
              return <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            })}
          </select>
        </div>
        
        <div className='grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-2 gap-3'>
            {allMusic?.albums?.items.map((singleMusic, i) => {
              return <SongCard key={singleMusic.id} isPlaying={isPlaying} activeSong={activeSong} data={allMusic} music={singleMusic} i={i}/>
            })}
        </div>
        
    </div>
  )
}

export default Discover

