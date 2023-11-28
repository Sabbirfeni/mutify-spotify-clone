import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopArtists } from '../redux/features/musicSlice';
import { Error, Loader, SongCard } from '../components'
import ArtistCard from '../components/ArtistCard';

function TopArtists() {
    const { token, isLoading, error, countrySongs, topArtists, allMusic } = useSelector(state => state.music)

    const { activeSong, isPlaying } = useSelector(state => state.player);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTopArtists({ token }))
    }, [])

    if(isLoading) {
      return <Loader/>
    }
    if(error) {
      return <Error/>
    }
    if(topArtists) {
      return (
        <div className='flex flex-col'>
          <h2 className='font-bold text-3xl text-left mt-4 mb-10 text-white'>Top Artists</h2>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3'>
            {topArtists?.albums?.items.map((music, i) => {
              return <ArtistCard key={music.id} track={music}/>
            })}
          </div>
        </div>
      )
    }
}

export default TopArtists