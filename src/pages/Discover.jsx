import React, { useEffect, useState } from 'react'
import { Loader, Error, SongCard } from '../components'
import { genres } from '../assets/constants'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMusic, fetchToken } from '../redux/features/musicSlice'


 
 
function Discover() { 
  const dispatch = useDispatch() 
  const musicState = useSelector(state => state.music)
  const {isPlaying, activeSong } = useSelector(state => state.player)

  const { allMusic, isLoading, error, token } = musicState

  useEffect(() => {
      dispatch(fetchToken())
        
      dispatch(fetchMusic(musicState))
  }, [])
  

  if(isLoading) return <Loader/>
  if(error) return <Error/> 
  if(allMusic) return (
    <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
          <h2 className='font-bold text-3xl text-black text-left'>
            Discover <span className='text-red-500'>"genre title"</span>
          </h2>
          <select className='bg-black text-gray-300 px-3 py-2 text-sm rounded-lg outline-none sm:mt-0 mt-5'
            onChange={() => {}}
            value=''
          >
            {genres.map(genre => {
              return <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            })}
          </select>
        </div>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3'>
            {allMusic?.albums?.items.map((singleMusic, i) => {
              return <SongCard key={singleMusic.id} isPlaying={isPlaying} activeSong={activeSong} data={allMusic} music={singleMusic} i={i}/>
            })}
        </div>
        
    </div>
  )
}

export default Discover

