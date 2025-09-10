import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import Loader from './Loader';


const Appdetails = () => {

    const { id } = useParams()
    const [app, setApp] = useState(null);
    const [error, setError] = useState(null);

    const baseURL = 'https://cat-apk-backend.vercel.app/'

    const navigate =  useNavigate()

    useEffect(() => {
        const fetchApp = async () => {
            try {
                const res = await axios.get(`${baseURL}/api/apps/${id}`)
                setApp(res.data)
                // console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchApp()
    }, [id])

    if (!app) return <p className="p-10 text-center"><Loader /></p>


    return (
        <div className='container '>
            <button onClick={() => navigate(-1)} className='py-1 px-3 my-5 text-[#456379] outline rounded-sm inline-flex items-center font-semibold gap-2 cursor-pointer hover:bg-[#d3e9f961] transition-all' > <FaArrowLeftLong /> back </button>
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
                    <a target='_blank' rel="noopener noreferrer" href={app.link} className='py-2 px-3 text-white bg-[#456379] rounded-sm'>Download</a>
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
            </div>
            <div className='px-10 mt-5'>
                {app.description}
            </div>
        </div>
    )
}

export default Appdetails