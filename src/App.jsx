import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='flex'>
        <div className='bg-gray-300'>sidebar</div>
        <div className='flex-1 flex flex-col bg-gray-200'>
            <div>search bar</div>
            <div className='px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse'>
                <div className='flex-1 h-fit '>
                    <Outlet/>
                </div>
                <div className='bg-gray-300 xl:sticky relative top-0 h-fit'>
                    top play
                </div>
            </div>
        </div>
        <div className='bg-gray-300'> active song </div>
    </div>
  )
}

export default App