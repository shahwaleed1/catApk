import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import Loader from '../Components/Loader';
import { Notyf } from 'notyf';
import { Link } from "react-router-dom";



const Admins = () => {

    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(false)


    // const baseURL = 'http://localhost:5000'
    const baseURL = 'https://cat-apk-backend.vercel.app/'

    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: 'right',
            y: 'top',
        }
    });


    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${baseURL}/api/admin/admins`);
            setAdmins(response.data)
        } catch (err) {
            console.log('error in admins', err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handlerdelete = async (id) => {
        try {
            const admainDeleted = await axios.delete(`${baseURL}/api/admin/admins/${id}`);
            if (admainDeleted.status === 204 || 200) {
                notyf.success('Admin Delete Success.')
            }
            fetchData()
        }
        catch (err) {
            console.log("Error in delete hander : ", err)
        }
    }

    // useEffect(() => {
    //     console.log(admins)
    // })



    return (
        <div>
            {loading ? <Loader /> :
                <>
                    <div className='flex justify-end mb-5'>
                        <Link className='py-2 px-4 ms-auto rounded bg-[#20374B] text-white' to='/adminregister'>Add new Admin </Link>
                    </div>
                    <div className='flex gap-6 flex-wrap mt-6 ms-4'>
                        {admins.map((admin) => (
                            <div key={admin._id} className='relative max-w-60 min-w-50 py-6 p-3 rounded-2xl border-2 border-gray-50 hover:shadow-2xl transition-all duration-200'>
                                <button onClick={() => { handlerdelete(admin._id) }} className='absolute top-2 right-2 group'>
                                    <MdDeleteOutline className='text-red-500 text-4xl p-2 rounded-full cursor-pointer hover:bg-rose-100 transition-all' />
                                    <div class="absolute bottom-full -right-2 mb-2 w-max px-2 py-1 bg-red-100 text-red-400 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        Delete this Admin!
                                    </div>
                                </button>
                                <img src={admin.image} alt={admin.name} className='w-40 h-40 m-auto mt-2 rounded-full border-dashed border-2 border-primary p-1' />
                                <div className='text-center mt-3 leading-4'>
                                    <h4 className='font-semibold'>{admin.name}</h4>
                                    <p>{admin.email}</p>
                                    <small>{new Date(admin.createAt).toDateString()}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

export default Admins