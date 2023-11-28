import React from 'react'
import { useNavigate } from 'react-router-dom';

function ArtistCard({ track }) {
  const artistImg = track.images[0] == undefined ? '' : track.images[0].url;
  const { id, name } = track.artists[0];
  const navigate = useNavigate();

  if(track.images[0] == undefined) return

  return (
    <div onClick={() => navigate(`/artists/${id}`)} className='flex flex-col w-full p-4 bg-slate-800 backdrop-blur-sm animate-slideup duration-1000 rounded-lg cursor-pointer'>
      <img src={`${artistImg}`} alt="artist" />
      <p className='mt-4 font-semibold text-md truncate text-white'>
          {track.name}
      </p>
    </div>
  )
}

export default ArtistCard