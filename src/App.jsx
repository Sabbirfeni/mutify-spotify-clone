import React, { useEffect, useRef } from 'react'

import { Outlet } from 'react-router-dom'
import SearchInput from './components/Navbar'
import Sidebar from './components/Sidebar'
import TopPlay from './components/TopPlay'
import Navbar from './components/Navbar'
import Controls from './components/MusicPlayer/Controls'
import Track from './components/MusicPlayer/Track'
import { useSelector } from 'react-redux'
import MusicPlayer from './components/MusicPlayer'

function App() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchToken())
    //   }, []) 

    
    const divRef = useRef(null)
    const { activeSong } = useSelector((state) => state.player);
    const mySong = JSON.stringify(activeSong)

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    })

  return ( 
    <div className='flex lg:gap-0 xl:gap-5 gap-0 bg-black'>
        <div className='bg-[#191624] z-20'>
            <Sidebar/>
        </div>
        <div className='flex-1 flex flex-col'>
            <div className='fixed w-full z-10 bg-[#191624]'><Navbar/></div>
            {/* h-[calc(100vh-72px)] */}
            <div ref={divRef} className='h-[100vh] flex xl:flex-row flex-col-reverse gap-5'>
                <div className='relative flex-1 overflow-y-scroll hide-scrollbar sm:px-3 xl:px-0 px-2 pb-4'>
                    <Outlet/>
                    {/* {activeSong?.name && (
                        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
                            <MusicPlayer />
                        </div>
                    )} */}
                </div>
                <div className='xl:sticky xl:flex hidden relative top-0 overflow-y-scroll hide-scrollbar'>
                    <TopPlay/>
                </div>
                
            </div>
        </div>
        {/* <div className='bg-gray-300 w-full fixed bottom-0'> <MusicPlayer/> </div> */}
        
    </div>
  )
}

export default App