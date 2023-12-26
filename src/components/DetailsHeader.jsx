import React from 'react'
import { Link } from 'react-router-dom'

function DetailsHeader({ artistID, artistData, songData }) {
   
  return (
    <div className='relative w-full flex flex-col'>

        <div className='w-full sm:h-48 h-36'>
            <img src={songData ? songData.images[0].url : artistData.images[0].url} className='brightness-50 absolute top-0 left-0 w-full h-full object-cover' alt="background-banner" />
            <div className='absolute sm:-bottom-10 -bottom-4 flex items-center sm:pl-5 pl-2'>
                <img 
                src={songData ? songData.images[0].url : artistData.images[0].url} alt="art" 
                className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black'
                />
                <div className='ml-5'>
                    <Link to={`/artists/${songData ? songData.artists[0].id : artistData.id}`}>
                        <p className='font-bold sm:text-3xl text-lg text-white'>{songData ? songData.name : artistData.name}</p>
                    </Link>
                    <p className='text-white sm:text-md text-sm sm:my-2 my-1'>{songData ? songData.name : artistData.name}</p>
                    <p className='text-white sm:text-md text-sm'>{songData ? songData.type : artistData.type}</p>
                </div>
            </div>
        </div>
        <div className='w-full sm:h-44 h-24'></div>
    </div>
  )
}

export default DetailsHeader