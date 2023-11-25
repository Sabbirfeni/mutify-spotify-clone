import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMusic } from '../redux/features/musicSlice'
import Error from './Error'
import { playPause, setActiveSong } from '../redux/features/playerSlice'

function RelatedSongs() {
const dispatch = useDispatch() 
    const musicState = useSelector(state => state.music)
    const { allMusic, isLoading, error, token } = musicState
    const relatedSong = allMusic.reverse().slice(1, 6)
    console.log(relatedSong)
    const { isPlaying, activeSong } = useSelector(state => state.player)
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    const handlePlayClick  = (music, data, i) => {
        dispatch(setActiveSong({ music, data, i }))
        dispatch(playPause(true))
    }

    useEffect(() => {
        dispatch(fetchMusic(musicState))
    }, [])

    if(isLoading) {
        return <span></span>
    }

    if(error) {
        return <Error/>
    }

    if(allMusic) {
        return (
            <div className='flex flex-col'>
                <h1 className='font-bold text-3xl text-white'>Related Songs</h1>

                <div className='mt-6 w-full flex flex-col'>

                </div>
            </div>
        )
    }

}

export default RelatedSongs