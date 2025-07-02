import React, { useEffect, useState } from 'react'
import Downloadbutton from './Downloadbutton'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Appdetails = () => {

    const { id } = useParams()
    const [app, setApp] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchApp = async () => {
            try{
                const res = await axios.get(`http://localhost:5000/api/apps/${id}`)
                setApp(res.data)
                // console.log(res.data)
            } catch (err){
                console.log(err)
            }
        }

        fetchApp()
    },[id])

    if (!app) return <p className="p-10 text-center">Something went wrong.</p>


    return (
        <div className='container '>
            <div className='flex p-4 px-10 mt-4 text-neutral-700'>
                <div>
                    <img className='w-[6rem] rounded-lg' src={app.image || app.icon} alt="" />
                </div>
                <div className='flex-1 ps-3'>
                    <h4 className='text-3xl'>{app.name}</h4>
                    <p>{app.features}</p>
                    <p>star</p>
                </div>
                <div className='mt-2'>
                    <Downloadbutton link={app.link} />
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