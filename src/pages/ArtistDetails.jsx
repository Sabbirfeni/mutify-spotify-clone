import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveSong, playPause } from '../redux/features/playerSlice'
import { fetchArtist, fetchSong } from '../redux/features/musicSlice'
import { Loader } from '../components'
import DetailsHeader from '../components/DetailsHeader'
import RelatedSongs from '../components/RelatedSongs'

function ArtistDetails() {
    const { artistId } = useParams()
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { isLoading, musicData, error } = useSelector(state => state.musicDetail)
    const { token, allMusic, artistData } = useSelector(state => state.music)
    console.log(artistData)
    useEffect(() => {
        dispatch(fetchArtist({token, artistId}))
    }, [artistId])
    
    if(isLoading) {
        return <Loader/>
    }

    if(artistData) {
        return (
            <div className='flex flex-col'>
                <DetailsHeader artistData={artistData} songData=''/>
                <div className='mb-10 mt-10'>
                    <h2 className='text-3xl font-bold text-white'>About Artist:</h2>
                    <div className="mt-5">
                        <div className='flex md:flex-row flex-col'>
                            {/* <img className='md:w-80 w-full' src={musicData.images[0].url} alt="image" /> */}
                            <div className='text-white'>
                                <p className='text-base my-1'><span className='font-bold'>Followers : </span>{artistData.followers.total}</p>
                                <p className='text-base my-1'><span className='font-bold'>Rank : </span>{artistData.popularity}</p>
                            </div>    
                        </div>

                    </div>
                </div>
                {/* <RelatedSongs/> */}
            </div>
        )
    }
}

export default ArtistDetails