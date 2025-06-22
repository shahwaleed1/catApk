import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgGames } from "react-icons/cg";
import { IoIosApps } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {

    const [showInput, setShowInput] = useState(false);



    return (
        <div className='bg-[#456379] px-20  py-1'>
            <div className='flex items-center justify-between'>
                <div>
                    <Link to={'/'}>
                        <img className='w-[10rem]' src="nav_logo.png" alt="logo" />
                    </Link>
                </div>
                <div>
                    <input className='outline-0 text-white min-w-md focus:border-b-3 p-1 focus:border-[#6187a2]' type="search" placeholder='Search' />
                </div>
                <div className='flex gap-x-6 items-center text-white font-semibold'>
                    <Link className='transition duration-150 ease-in-out hover:text-[#FFBD59]'><IoIosApps className='inline me-1' />Apps</Link>
                    <Link className='transition duration-150 ease-in-out hover:text-[#FFBD59]'><CgGames className='inline me-1' />Games</Link>
                    <Link className='transition duration-150 ease-in-out hover:text-[#FFBD59]'><FaRegNewspaper className='inline me-1' />Blog</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar