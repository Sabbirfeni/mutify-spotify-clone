import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function ArtistCard({ song }) {

  const spotifyLink = song.artists[0].external_urls.spotify;
  const artistImg = song.images[0] == undefined ? '' : song.images[0].url;
  const { name } = song;
  const navigate = useNavigate();

  if(song.images[0] == undefined) return

  return (
    <Link to={spotifyLink} target="_blank" className='flex flex-col w-full p-4 bg-[#1e1d20] backdrop-blur-sm animate-slideup duration-1000 rounded-lg cursor-pointer'>
      <img src={`${artistImg}`} alt="artist" />
      <p className='mt-4 font-semibold text-md truncate text-white'>
          {name}
      </p>
    </Link>
  )
}

export default ArtistCard