import React, { useEffect, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
// import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import PlayPause from './MusicPlayer/PlayPause'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SongBar from './SongBar'
// import { is } from 'immer/dist/internal'


function TopPlay() {
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { allMusic } = useSelector(state => state.music)
    const topPlays = allMusic?.albums?.items.slice(0, 6)
    // console.log(topPlays)
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }
    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }))
        dispatch(playPause(true))
    }


  return (
    <div className='xl:flex hidden xl:mb-0 mb-6 flex-1 lg:max-w-300 xl:max-w-[330px] 2xl:max-w-[380px] max-w-full flex-col py-5 px-3 pr-10'>
        <div className='w-full flex flex-col'>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='font-bold text-xl text-white'>Top Charts</h2>
                <Link to='/top-artists'>
                    <p className='text-sm cursor-pointer hover:text-white text-gray-500'>See more</p>
                </Link>
            </div>
            <div className='mt-4 flex flex-col gap-0'>
                {topPlays?.map((song, i) => (
                    <SongBar key={song.id} song={song} i={i}
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                        // handlePauseClick={handlePauseClick}
                        // handlePlayClick={() => handlePlayClick(song, i)}
                    />
                ))}
            </div>
        </div>

        {/* <div className='w-full flex flex-col mt-6'>
            <div className='flex flex-row justify-between items-center mb-4'>
                <h2 className='font-bold text-xl text-white'>Top Artists</h2>
                <Link to='/top-artists'>
                    <p className='text-sm cursor-pointer hover:text-white text-gray-500'>See more</p>
                </Link>
            </div>
            <Swiper
                slidesPerView='auto'
                spaceBetween={15}
                freeMode
                centeredSlides
                centeredSlidesBounds
                className='mt-4'
            >
                {topPlays?.map((song, i) => (
                    <SwiperSlide
                    key={song.id}
                    style={{ width: '120px', height: 'auto' }}
                    className='shadow-lg rounded-full animate-slideright'
                    >
                        <Link to={`/artists/${song?.artists[0].id}`}>
                            <img src={song?.images[0].url} alt="artists" 
                            className='rounded-full w-full object-cover'
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div> */}
    </div>
  )
}

export default TopPlay