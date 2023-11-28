import React from 'react'
import { Link } from 'react-router-dom'

function DetailsHeader({ artistID, artistData, songData }) {
   
  return (
    <div className='relative w-full flex flex-col'>
        <div className='w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28'>
            <div className='absolute inset-0 flex items-center'>
                <img 
                src={songData ? songData.images[0].url : artistData.images[0].url} alt="art" 
                className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black'
                />
                <div className='ml-5'>
                    <Link to={`/artists/${songData ? songData.artists[0].id : artistData.id}`}>
                        <p className='font-bold sm:text-3xl text-xl text-white'>{songData ? songData.name : artistData.name}</p>
                    </Link>
                    <p className='text-white my-2'>{songData ? songData.name : artistData.name}</p>
                    <p className='text-white'>{songData ? songData.type : artistData.type}</p>
                </div>
            </div>
        </div>
        <div className='w-full sm:h-44 h-24'></div>
    </div>
  )
}

export default DetailsHeader