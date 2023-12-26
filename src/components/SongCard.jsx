import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PlayPause from './MusicPlayer/PlayPause'
import { useDispatch, useSelector } from 'react-redux'
import { playPause, setActiveSong } from '../redux/features/playerSlice'

function SongCard({ isPlaying, activeSong, countrySong, music, i, data }) {
  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick  = () => {
    dispatch(setActiveSong({ music, data, i }))
    dispatch(playPause(true))
  }
   
  return (
    <div className='flex flex-col w-full p-4 bg-[#1e1d20] backdrop-blur-sm animate-slideup duration-1000 rounded-lg cursor-pointer'>
      <div className='relative w-full group'>
        <div className={`absolute inset-0 justify-center items-center hidden group-hover:bg-opacity-60 group-hover:flex group-hover:bg-black`}>
          <PlayPause isPlaying={isPlaying} activeSong={activeSong} music={music && music} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick}/>
        </div>
        <img alt='music_img' className='object-cover' src={music ? music.images[0].url : countrySong.icons[0].url}/>
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-md truncate text-white'>
          <Link to={music ? `/songs/${music?.id}` : '/around-you'}>
            {music ? music.name : countrySong.name}
          </Link>
        </p>
        <p className='text-sm truncate text-black-100 mt-1 text-gray-500'>
          <Link to={music ? `/artists/${music.artists[0].id}` : `around-you`}>
            {music ? music.artists[0].name : countrySong.name}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard