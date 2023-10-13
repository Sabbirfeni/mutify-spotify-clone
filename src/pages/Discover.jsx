import React, { useEffect } from 'react'
import { Loader, Error, SongCard } from '../components'
import { genres } from '../assets/constants'

function Discover() {
  // console.log(genres)

  const getSpotify = () => {
    fetch('https://v1.nocodeapi.com/sabbir/spotify/iblZwYTGVvkrOqLE/search?q=hiphop', {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow"
    })
    .then(response => response.json())
    .then(result => console.log(result.albums.items.length))
    .catch(error => console.log('error', error));
  }
  useEffect(() => {
    getSpotify()
  }, [])

  const genreTitle = 'Pop'
  return (
    <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
          <h2 className='font-bold text-3xl text-black text-left'>
            Discover <span className='text-red-500'>{ genreTitle }</span>
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
        <div className='grid sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-5 gap-3'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((song, i) => {
              return <SongCard key={song} song={song} i={i}/>
            })}
        </div>
    </div>
  )
}

export default Discover