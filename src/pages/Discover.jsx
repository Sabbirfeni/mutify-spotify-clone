import React, { useEffect, useState } from 'react'
import { Loader, Error, SongCard } from '../components'
import { genres } from '../assets/constants'
// import { useGetMusicQuery } from '../redux/services/noCodeApi'
function Discover() {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const getSpotify = async () => {
    setLoading(true)
    try {
      fetch('https://v1.nocodeapi.com/sabbir/spotify/iblZwYTGVvkrOqLE/search?q=hiphop', {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow"
      })
      .then(response => response.json())
      .then(result => {
        console.log(result.albums.items)
        setData(result.albums.items)
        setLoading(false)
      })
    } catch(err) {
      setLoading(false)
      setError(err.message)
    }
  }
  useEffect(() => {
    getSpotify()
  }, [])

  const genreTitle = 'Pop'
  if(loading) return <Loader/>
  if(error) return <Error/>
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
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3'>
            {data?.map((music, i) => {
              return <SongCard key={music.id} music={music} i={i}/>
            })}
        </div>
    </div>
  )
}

export default Discover