import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import SearchInput from './components/SearchInput'
import Sidebar from './components/Sidebar'
import TopPlay from './components/TopPlay'
function App() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchToken())
    //   }, []) 
  return ( 
    <div className='flex'>
        <div className='bg-[#191624]'>
            <Sidebar/>
        </div>
        <div className='flex-1 flex flex-col bg-gray-200'>
            <div><SearchInput/></div>
            <div className='px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse'>
                <div className='flex-1 h-fit '>
                    <Outlet/>
                    {/* <Controls/> */}
                </div>
                <div className='xl:sticky relative top-0 h-fit '>
                    <TopPlay/>
                </div>
            </div>
        </div>
        {/* <div className='bg-gray-300 w-full fixed bottom-0'> <MusicPlayer/> </div> */}
    
    </div>
  )
}

export default App