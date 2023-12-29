import React, { useState } from 'react'
import { links } from '../assets/constants'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMobileMenuOpen } from '../redux/features/mobileMenuSlice';
import { logo } from '../assets/images';
import './sidebar.css'

function Sidebar() {

    const { mobileMenuOpen } = useSelector(state => state.mobileMenu);
    const dispatch = useDispatch();

    const NavLinks = ({handleClick}) => (
        <div className='mt-5 text-white'>
            {links.map(item => (
                <NavLink 
                key={item.name} 
                to={item.to} 
                className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
                onClick={() => handleClick && handleClick()}
                >
                    <item.icon className='w-6 h-6 mr-2'/>
                    {item.name}
                </NavLink>
            ))}
        </div>
    ) 
  return (
    <>
        <div className='lg:flex hidden flex-col w-[240px] py-10 px-4'>
            <Link className='flex flex-col items-center'>
                <img src={logo} className='w-16' alt="logo" />
                <h4 className='text-xl text-gray-300 mt-2 font-medium logo'>Mutify Play</h4>
            </Link>
            
            <NavLinks/>
        </div>
        
        <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 lg:hidden
            smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
                <NavLinks handleClick={() => dispatch(setMobileMenuOpen(false))}/>
        </div>
    </>
    
  )
}

export default Sidebar


// <Swiper
//                 slidesPerView={3}
//                 spaceBetween={30}
//                 freeMode={true}
//                 pagination={{
//                 clickable: true,
//                 }}
//                 modules={[FreeMode, Pagination]}
//                 className="mySwiper"
//             >
//                 {topPlays?.map((song, i) => (
//                     <SwiperSlide
//                     key={song.id}
//                     style={{ width: '120px', height: 'auto' }}
//                     className='shadow-lg rounded-full animate-slideright'
//                     >
//                         <Link to={`/artists/${song?.artists[0].id}`}>
//                             <img src={song?.images[0].url} alt="artists" 
//                             className='rounded-full w-20 object-cover'
//                             />
//                         </Link>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>