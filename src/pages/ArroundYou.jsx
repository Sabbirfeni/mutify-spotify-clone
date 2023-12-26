import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSongByCountry } from '../redux/features/musicSlice';
import { Error, Loader, SongCard } from '../components'
import { countryList } from '../assets/constants';

function ArroundYou() {
    const [ countryName, setCountryName ] = useState('')
    const [ loading, setLoading ] = useState(true);
    const { token, isLoading, error, countrySongs, allMusic } = useSelector(state => state.music)
    const { activeSong, isPlaying } = useSelector(state => state.player);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_rLPGDRwPLY1NbKa7q6OvRVHGyzkPf`)
        .then(res => {
          const country = countryList[res?.data?.location?.country];
          setCountryName(country)
          dispatch(getSongByCountry({ token, country }))
        })
        .catch(err => console.log(err.message))
        .finally(() => setLoading(false))
    }, [])

    if(isLoading && loading) {
      return <Loader/>
    }
    if(error) {
      return <Error/>
    }
    if(countrySongs?.albums) {
      return (
        <div className='flex flex-col'>
          <h2 className='font-bold md:text-3xl text-xl text-left px-4 md:mb-10 mb-6 mt-24 text-white'>Around <span className='text-red-500'>"{countryName}"</span></h2>
          <div className='grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-2 gap-3'>
            {countrySongs?.albums?.items.map((singleMusic, i) => {
               return <SongCard key={singleMusic.id} isPlaying={isPlaying} activeSong={activeSong} data={allMusic} music={singleMusic} i={i}/>
            })}
        </div>
        </div>
      )
    }
}

export default ArroundYou