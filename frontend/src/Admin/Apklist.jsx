import React from 'react'
import { useEffect } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import axios from 'axios'
import { useState } from 'react';
import { Notyf } from 'notyf';




const Apklist = () => {
    const [data, setData] = useState([])

    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: 'center',
            y: 'top',
        }
    });


    useEffect(() => {
        fetchApps()
    }, [])

    const fetchApps = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/apps');
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handlerDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/apps/${id}`);
            if (res.status === 200) {
                notyf.success(res.data.msg)
            }
            fetchApps();
        }
        catch (err) {
            console.error('Error deleting app:', err);
        }
    }


    console.log('This data from Apklist componet :', data)


    return (
        <div className='w-full p-2'>
            <div className='flex justify-end'>
                <input className='w-[20rem] border-2 text-neutral-600 border-[#739dc4] p-1 px-4 rounded-2xl outline-[#3b81c2]' type="search" placeholder='Search' />
            </div>
            <div className='mt-4 p-2 text-neutral-700'>
                {data.map((app) => (
                    <div key={app._id} className='border border-neutral-200 p-2 my-2 rounded-lg flex gap-3 hover:shadow-md transition-all ease-in-out'>
                        <div>
                            <img className='aspect-square w-21 rounded-lg' src={app.image} alt="" />
                        </div>
                        <div className='flex-1'>
                            <h4 className='font-semibold text-lg'>{app.name}</h4>
                            <p>{app.features}</p>
                            <p>update: {new Date(app.createdAt).toLocaleString()}</p>
                        </div>
                        <div className='m-1'>
                            <MdOutlineEdit className='text-4xl p-2 rounded-full hover:bg-amber-100 hover:text-yellow-500' />
                            <MdDeleteOutline onClick={() => handlerDelete(app._id)} className='text-4xl p-2 mt-1 rounded-full hover:bg-rose-100 hover:text-rose-500' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Apklist