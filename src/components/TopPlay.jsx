import React, { useEffect, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
// import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import PlayPause from './MusicPlayer/PlayPause'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { is } from 'immer/dist/internal'


function TopPlay() {
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { allMusic } = useSelector(state => state.music)
    const topPlays = allMusic?.albums?.items.slice(0, 5)
    // console.log(topPlays)
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }
    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }))
        dispatch(playPause(true))
    }

    const divRef = useRef(null)
  
    const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
        return <div className='w-full flex flex-row items-center hover:bg-[#4c426c] py-3 p-4 rounded-lg cursor-pointer'>
            <h3 className='font-bold text-base mr-3'>{i + 1}.</h3>
            <div className='flex-1 flex flex-row justify-between items-center'>
                <img src={song?.images[0].url} className='w-20 h-20 rounded-lg' alt={song?.name} />
                <div className='flex-1 flex flex-col justify-center mx-3'>
                    <Link to={`/songs/${song.id}`}>
                        <p className='text-xl font-bold'>
                            {song.name.length > 10 ? song.name.substring(0, 15) + '...' : song.name}
                        </p>
                    </Link>
                    <Link to={`/artists/${song.artists[0].id}`}>
                        <p className='text-ase mt-1'>{song.artists[0].name.length > 15 ? song.artists[0].name.substring(0, 15) + '...' : song.artists[0].name}</p>
                    </Link>
                </div>
            </div>
            <PlayPause />
            {/* {song.name.length > 10 ? song.name.substring(0, 15) + '...' : song.name} */}
        </div>
        }

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    })

  return (
    <div ref={divRef} className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex-col'>
        <div className='w-full xl:flex hidden flex-col'>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='font-bold text-2xl'>Top Charts</h2>
                <Link to='/top-charts'>
                    <p className='text-base cursor-pointer hover:text-gray-500'>See more</p>
                </Link>
            </div>
            <div className='mt-4 flex flex-col gap-0'>
                {topPlays?.map((song, i) => (
                    <TopChartCard key={song.id} song={song} i={i}
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                        // handlePauseClick={handlePauseClick}
                        // handlePlayClick={() => handlePlayClick(song, i)}
                    />
                ))}
            </div>
        </div>

        <div className='w-full flex flex-col mt-8'>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='font-bold text-2xl'>Top Artists</h2>
                <Link to='/top-artists'>
                    <p className='text-base cursor-pointer hover:text-gray-500'>See more</p>
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
        </div>
    </div>
  )
}

export default TopPlay