import React, { useEffect, useRef } from 'react'

import { Outlet } from 'react-router-dom'
import SearchInput from './components/Navbar'
import Sidebar from './components/Sidebar'
import TopPlay from './components/TopPlay'
import Navbar from './components/Navbar'
function App() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchToken())
    //   }, []) 

    
    const divRef = useRef(null)
  

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    })

  return ( 
    <div className='flex lg:gap-0 xl:gap-5 gap-0 bg-black'>
        <div className='bg-[#191624] z-20'>
            <Sidebar/>
        </div>
        <div className='flex-1 flex flex-col'>
            <div className='fixed w-full z-10 bg-black'><Navbar/></div>
            {/* h-[calc(100vh-72px)] */}
            <div ref={divRef} className='h-[100vh] flex xl:flex-row flex-col-reverse gap-5'>
                <div  className='flex-1 overflow-y-scroll hide-scrollbar sm:px-3 xl:px-0 px-2 pb-4'>
                    <Outlet/>
                    {/* <Controls/> */}
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