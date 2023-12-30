import React, { useState } from 'react'
import {BsPlayCircle} from 'react-icons/bs'
import {FiPauseCircle} from 'react-icons/fi'
import { Link } from 'react-router-dom'

function PlayPause({ isPlaying, musicUrl, handlePlayClick, handlePauseClick, topPlay }) {


  return (
    <Link to={musicUrl} target='_blank'>
      <BsPlayCircle
        size={topPlay ? 24 : 35}
        className='text-gray-300'
        onClick={handlePlayClick}
      />
    </Link>
  )
  
//   if(isPlaying) {
//     return (
//         <FiPauseCircle
//           size={topPlay ? 20 : 35}
//           className='text-gray-300'
//           onClick={handlePauseClick}
//         />
// )
//   } else {
//     return (
//       <Link to={musicUrl} target='_blank'>
//         <BsPlayCircle
//           size={topPlay ? 24 : 35}
//           className='text-gray-300'
//           onClick={handlePlayClick}
//         />
//       </Link>
//     )
//   }
  // console.log(isPlaying && 
  //   activeMusic?.name === music.name)

  // isPlaying  ?
  //   (<BsPlayCircle
  //     size={35}
  //     className='text-gray-300'
  //     onClick={handlePlay}
  //   />) :
  //   (<FiPauseCircle
  //     size={35}
  //     className='text-gray-300'
  //     onClick={handlePause}
  //   />)
}

export default PlayPause