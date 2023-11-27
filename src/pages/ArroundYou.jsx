import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSongByCountry } from '../redux/features/musicSlice';
import { Error, Loader, SongCard } from '../components'

function ArroundYou() {
    const [ country, setCountry ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const { token, isLoading, error, countrySongs, allMusic } = useSelector(state => state.music)
    const { activeSong, isPlaying } = useSelector(state => state.player);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_hoNNN28CmNO7LJiL6PU1fzthZXcuO`)
        .then(res => setCountry(res?.data?.location?.country))
        .catch(err => console.log(err.message))
        .finally(() => setLoading(false))

        dispatch(getSongByCountry({ token, country }))
    }, [country])

    if(isLoading && loading) {
      return <Loader/>
    }
    if(error) {
      return <Error/>
    }
    if(countrySongs?.categories) {
      return (
        <div className='flex flex-col'>
          <h2 className='font-bold text-3xl text-left mt-4 mb-10 text-white'>Around <span className='text-red-500'>"{country}"</span></h2>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3'>
            {countrySongs.categories.items.map((music, i) => {
              return <SongCard 
                key={music.id}
                countrySong={music}
                music=''
                data={allMusic}
                activeSong={activeSong} 
                isPlaying={isPlaying}
                i={i}
              />
            })}
          </div>
        </div>
      )
    }
}

export default ArroundYou