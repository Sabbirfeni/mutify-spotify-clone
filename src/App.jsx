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
    <div className='flex lg:gap-3 xl:gap-5 gap-0 bg-black'>
        <div className='bg-[#191624]'>
            <Sidebar/>
        </div>
        <div className='flex-1 flex flex-col'>
            <div><Navbar/></div>
            {/* h-[calc(100vh-72px)] */}
            <div ref={divRef} className='h-[100vh] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse gap-5'>
                <div  className='flex-1 h-fit mt-5'>
                    <Outlet/>
                    {/* <Controls/> */}
                </div>
                <div className='xl:sticky relative top-0 h-fit rounded-lg bg-[#191624]'>
                    <TopPlay/>
                </div>
            </div>
        </div>
        {/* <div className='bg-gray-300 w-full fixed bottom-0'> <MusicPlayer/> </div> */}
    
    </div>
  )
}

export default App