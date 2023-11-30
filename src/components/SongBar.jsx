import { Link } from "react-router-dom";
import PlayPause from "./MusicPlayer/PlayPause";

const SongBar = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
    return <div className='w-full flex flex-row items-center transition hover:bg-slate-800 py-3 p-4 rounded-lg cursor-pointer'>
        <h3 className='font-bold text-xs mr-3 text-white'>{i + 1}.</h3>
        <div className='flex-1 flex flex-row justify-between items-center'>
            <img src={song?.images[0].url} className='xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 rounded-lg' alt={song?.name} />
            <div className='flex-1 flex flex-col justify-center mx-3'>
                <Link to={`/songs/${song.id}`}>
                    <p className='xl:text-xs 2xl:text-sm font-bold text-white'>
                        {song.name.length > 10 ? song.name.substring(0, 15) + '...' : song.name}
                    </p>
                </Link>
                <Link to={`/artists/${song.artists[0].id}`}>
                    <p className='text-xs mt-1 text-gray-500'>{song.artists[0].name.length > 15 ? song.artists[0].name.substring(0, 15) + '...' : song.artists[0].name}</p>
                </Link>
            </div>
        </div>
        <PlayPause topPlay={true}/>
        {/* {song.name.length > 10 ? song.name.substring(0, 15) + '...' : song.name} */}
    </div>
    }

export default SongBar;