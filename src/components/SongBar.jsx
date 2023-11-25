import { Link } from "react-router-dom";
import PlayPause from "./MusicPlayer/PlayPause";

const SongBar = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
    return <div className='w-full flex flex-row items-center hover:bg-[#4c426c] py-3 p-4 rounded-lg cursor-pointer'>
        <h3 className='font-bold text-base mr-3'>{i + 1}.</h3>
        <div className='flex-1 flex flex-row justify-between items-center'>
            <img src={song?.images[0].url} className='w-20 h-20 rounded-lg' alt={song?.name} />
            <div className='flex-1 flex flex-col justify-center mx-3'>
                <Link to={`/songs/${song.id}`}>
                    <p className='text-xl font-bold'>
                        {song.name.length > 10 ? song.name.substring(0, 15) + '...' : song.name}
                    </p>
                </Link>
                <Link to={`/artists/${song.artists[0].id}`}>
                    <p className='text-ase mt-1'>{song.artists[0].name.length > 15 ? song.artists[0].name.substring(0, 15) + '...' : song.artists[0].name}</p>
                </Link>
            </div>
        </div>
        <PlayPause />
        {/* {song.name.length > 10 ? song.name.substring(0, 15) + '...' : song.name} */}
    </div>
    }

export default SongBar;