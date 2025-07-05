import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Sidebar = ({ onMenuClick, activePage }) => {
    
    return (
        <div className='h-screen bg-[#20374b] text-white'>
            <div className='p-3 relative'>
                <img src="/nav_logo.png" alt="" />
                <h4 className='text-xl font-semibold text-center absolute right-10 top-5'>Admin</h4>
                <hr className='border-[#30516e] my-2' />
            </div>
            <div>
                <button
                    onClick={() => onMenuClick('uploadapk')}
                    className={`w-full inline-flex items-center gap-2 ps-3 py-2 my-1
                    ${activePage === 'uploadapk' ? 'bg-[#375874] text-white' :  'text-white hover:bg-[#4c6377]'}`}
                >
                    <IoIosAddCircleOutline className="text-xl" />
                    Upload APK
                </button>

                <button
                    onClick={() => onMenuClick('apklist')}
                    className={`w-full inline-flex items-center gap-2 ps-3 py-2 my-1
                    ${activePage === 'apklist' ? 'bg-[#375874] text-white' :  'text-white hover:bg-[#4c6377]'}`}
                >
                    <CiCircleList className="text-xl" />
                    APK List
                </button>
            </div>
        </div>
    )
}

export default Sidebar