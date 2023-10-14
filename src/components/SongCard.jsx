import React from 'react'

function SongCard({ music }) {
  return (
    <div className='w-full bg-gray-500'>{music.name}</div>
  )
}

export default SongCard