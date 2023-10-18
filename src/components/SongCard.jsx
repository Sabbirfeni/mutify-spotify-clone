import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PlayPause from './MusicPlayer/PlayPause'

function SongCard({ music, i }) {
  const [ activeMusic, setActiveMusic ] = useState({
    title: 'sabbir'
  })

  const handlePauseClick = () => {

  }

  const handlePlayClick  = () => {

  }
  
  return (
    <div className='flex flex-col w-full p-4 bg-gray-300 backdrop-blur-sm animate-slideup duration-1000 rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div className={`absolute inset-0 justify-center items-center hidden group-hover:bg-opacity-60 group-hover:flex group-hover:bg-black ${activeMusic.title === music.title ? 'flex bg-black bg-opacity-70' : 'hidded'}`}>
          <PlayPause music={music} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick}/>
        </div>
        <img alt='music_img' className='w-full h-full object-cover' src={music.images[0].url}/>
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-md truncate'>
          <Link to={`/songs/${music?.id}`}>
            {music.name}
          </Link>
        </p>
        <p className='text-sm truncate text-black-100 mt-1'>
          <Link to={`/songs/${music?.id}`}>
            {music.artists[0].name}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard