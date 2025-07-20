import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";


const Admins = () => {

    const [admins, setAdmins] = useState([]);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin/admins');
                setAdmins(response.data)
            } catch (err) {
                console.log('error in admins', err)
            }
        }

        fetchData();
    }, [])

    useEffect(() => {
        console.log(admins)
    })



    return (
        <div className='flex gap-4 flex-wrap'>
            {admins.map((admin) => (
                <div key={admin._id} className='max-w-50 p-2 border-2'>
                    <MdDeleteOutline className='ml-auto text-red-500 text-4xl p-2 rounded-full cursor-pointer hover:bg-rose-100' />
                    <img src={admin.image} alt={admin.name} className='w-40 m-auto rounded-full border-dashed border-2 p-1' />
                    <div className='text-center mt-3 leading-4'>
                        <h4 className='font-semibold'>{admin.name}</h4>
                        <p>{admin.email}</p>
                        <small>{new Date(admin.createAt).toDateString()}</small>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Admins