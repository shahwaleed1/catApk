import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";



const Apklist = () => {
    return (
        <div className='w-full p-2'>
            <div className='flex justify-end'>
                <input className='w-[20rem] border-2 text-neutral-600 border-[#739dc4] p-1 ps-4 rounded-2xl outline-[#3b81c2]' type="search" placeholder='Search' />
            </div>
            <div className='mt-4 p-2'>
                <div className='border border-neutral-200 p-2 rounded-lg flex gap-3'>
                    <div>
                        <img className='aspect-square w-21 rounded-lg' src="men.jpeg" alt="" />
                    </div>
                    <div className='flex-1'>
                        <h4 className='font-semibold text-lg'>App Name</h4>
                        <p>features: No Ads</p>
                        <p>update:20-3-2025</p>
                    </div>
                    <div className='m-1'>
                        <MdOutlineEdit className='text-4xl p-2 rounded-full hover:bg-amber-100 hover:text-yellow-500' />
                        <MdDeleteOutline className='text-4xl p-2 mt-1 rounded-full hover:bg-rose-100 hover:text-rose-500' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apklist