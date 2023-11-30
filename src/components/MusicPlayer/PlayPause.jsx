import React from 'react'
import {BsPlayCircle} from 'react-icons/bs'
import {FiPauseCircle} from 'react-icons/fi'

function PlayPause({ isPlaying, activeMusic, music, handlePlayClick, handlePauseClick, topPlay }) {
  // && activeMusic?.name === music.name
  if(isPlaying) {
    return (<FiPauseCircle
      size={topPlay ? 20 : 35}
      className='text-gray-300'
      onClick={handlePauseClick}/>)
  } else {
    return (
      <BsPlayCircle
      size={topPlay ? 24 : 35}
      className='text-gray-300'
      onClick={handlePlayClick}/>
    )
  }
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