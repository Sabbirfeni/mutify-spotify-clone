import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveSong, playPause } from '../redux/features/playerSlice'
import { fetchSong } from '../redux/features/musicSlice'
import { Loader } from '../components'
import DetailsHeader from '../components/DetailsHeader'
import RelatedSongs from '../components/RelatedSongs'

function SongDetails() {
    const { songid } = useParams()
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { isLoading, musicData, error } = useSelector(state => state.musicDetail)
    const { token, allMusic } = useSelector(state => state.music)

    useEffect(() => {
        dispatch(fetchSong({token, songid}))
    }, [songid])
    
    if(isLoading) {
        return <Loader/>
    }

    if(musicData) {
        return (
            <div className='flex flex-col'>
                <DetailsHeader artistId='' songData={musicData}/>
                <div className='mb-10 mt-10'>
                    <h2 className='text-3xl font-bold text-white'>Details:</h2>
                    <div className="mt-5">
                        <div className='flex md:flex-row flex-col'>
                            {/* <img className='md:w-80 w-full' src={musicData.images[0].url} alt="image" /> */}
                            <div className='text-white'>
                                <p className='text-base my-1'><span className='font-bold'>Song Name : </span>{musicData.name}</p>
                                <p className='text-base my-1'><span className='font-bold'>Rank : </span>{musicData.popularity}</p>
                                <p className='text-base my-1'><span className='font-bold'>Artist Name : </span>{musicData.artists[0].name}</p>
                                <p className='text-base my-1'><span className='font-bold'>Released on : </span>{musicData.release_date}</p>
                                <p className='text-base my-1'><span className='font-bold'>Copyrights : </span>{musicData.copyrights[0].text}</p>
                            </div>    
                        </div>

                    </div>
                </div>
                <RelatedSongs allMusic={allMusic}/>
            </div>
        )
    }
}

export default SongDetails