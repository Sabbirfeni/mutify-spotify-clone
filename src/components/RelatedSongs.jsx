import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMusic } from '../redux/features/musicSlice'
import Error from './Error'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import SongBar from './SongBar'

function RelatedSongs() {
const dispatch = useDispatch() 
    const musicState = useSelector(state => state.music)
    const { allMusic, isLoading, error, token } = musicState
    console.log(allMusic)
    // const relatedSong = allMusic.albums.items.reverse().slice(1, 6)
    const { isPlaying, activeSong } = useSelector(state => state.player)
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    const handlePlayClick  = (music, data, i) => {
        dispatch(setActiveSong({ music, data, i }))
        dispatch(playPause(true))
    }

    useEffect(() => { 
        // dispatch(fetchMusic(musicState))
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
                <h1 className='font-bold text-xl text-[#fff]'>Related Songs</h1>

                <div className='mt-6 w-full flex flex-col'>
                    {allMusic?.albums?.items.slice(15, 25).map((song, i) => {
                        return (
                            <SongBar
                                key={`${song.key}+${song.name}`}
                                song={song}
                                i={i}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                                handlePauseClick={handlePauseClick}
                                handlePlayClick={handlePlayClick}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default RelatedSongs