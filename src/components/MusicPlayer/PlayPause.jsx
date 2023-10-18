import React from 'react'
import {BsPlayCircle} from 'react-icons/bs'
import {FiPauseCircle} from 'react-icons/fi'

function PlayPause() {
  return (
    <div>
        <BsPlayCircle
         size={35}
         className='text-gray-300'
        />
        {/* <FiPauseCircle
         size={35}
         className='text-gray-300'
        /> */}
    </div>
  )
}

export default PlayPause