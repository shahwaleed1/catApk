import React from 'react'
import Downloadbutton from './Downloadbutton'

const Appdetails = () => {
    return (
        <div className='container '>
            <div className='flex p-4 px-10 mt-4 text-neutral-700'>
                <div>
                    <img className='w-[6rem] rounded-lg' src="/men.jpeg" alt="" />
                </div>
                <div className='flex-1 ps-3'>
                    <h4 className='text-3xl'>LightRoom</h4>
                    <p>details</p>
                    <p>star</p>
                </div>
                <div className='mt-2'>
                    <Downloadbutton />
                    {/* <button className='py-2 px-3 text-white bg-[#456379] rounded-sm'>Download</button> */}
                </div>
            </div>
            <div className='px-10 mt-5'>
                <h5>ScreenShorts</h5>
                <div>
                    images 5 - 6
                </div>
            </div>
            <div className='px-10 mt-5'>
                <div className='flex justify-between'>
                    <div>hi</div>
                    <div>mi</div>
                </div>
                <Downloadbutton />
            </div>
            <div className='px-10 mt-5'>
                desripation
            </div>
        </div>
    )
}

export default Appdetails