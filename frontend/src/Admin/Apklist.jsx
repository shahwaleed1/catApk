import React from 'react'
import { useEffect } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import axios from 'axios'
import { useState } from 'react';
import { Notyf } from 'notyf';
import Formui from '../Components/Formui';
import Loader from '../Components/Loader';
import DeleteModel from '../Components/Admin/DeleteModel';



const Apklist = () => {

    const baseURL = 'https://catapk-production.up.railway.app'

    const [data, setData] = useState([])
    const [editId, setEditId] = useState(null);
    const [editForm, setEditForm] = useState({
        name: '',
        version: '',
        description: '',
        features: '',
        link: '',
        icon: '',
        images: ''
    })
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const [deleteApp, setDeleteApp] = useState(null)
    const [showModel, setShowModel] = useState(false)
    
    // console.log(deleteApp)


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
        setLoading(true)
        try {
            const response = await axios.get(`${baseURL}/api/apps`);
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false)
        }
    }


    const handleEditClick = (app) => {
        setEditId(app._id);
        setEditForm({
            name: app.name,
            version: app.version,
            description: app.description,
            features: app.features,
            link: app.link,
            icon: app.image,
            images: ''
        });
        setOpen(true); 
    };



    const handlerUpdate = async () => {
        try {
            const res = await axios.put(`${baseURL}/api/apps/${editId}`, editForm);
            setEditId(null);
            fetchApps();
        } catch (err) {
            console.log('Error in Edit: ', err)
        }
    }

    // console.log('This data from Apklist componet :', data)


    return (
        <div className='w-full p-2'>
            <div className='flex justify-end'>
                <input className='w-[20rem] border-2 text-neutral-600 border-[#739dc4] p-1 px-4 rounded-2xl outline-[#3b81c2]' type="search" placeholder='Search' />
            </div>

            <Formui
                editForm={editForm}
                setEditForm={setEditForm}
                editId={editId}
                handlerUpdate={handlerUpdate}
                open={open}
                setOpen={setOpen}
            />

            {loading ? <Loader /> : (
                <div className='mt-4 p-2 text-neutral-700'>
                    {data.map((app) => (
                        <div key={app._id} className='border border-neutral-200 p-2 my-2 rounded-lg flex gap-3 hover:shadow-md transition-all ease-in-out'>
                            <div>
                                <img className='aspect-square w-21 rounded-lg' src={app.image || app.icon} alt="" />
                            </div>
                            <div className='flex-1'>
                                <h4 className='font-semibold text-lg'>{app.name}</h4>
                                <p>{app.features}</p>
                                <p>update: {new Date(app.createdAt).toLocaleString()}</p>
                            </div>
                            <div className='m-1'>
                                <MdOutlineEdit onClick={() => handleEditClick(app)} className='text-4xl p-2 rounded-full cursor-pointer hover:bg-amber-100 hover:text-yellow-500' />
                                <MdDeleteOutline onClick={() => {
                                    setDeleteApp(app)
                                    setShowModel(true)
                                }}
                                className='text-4xl p-2 mt-1 rounded-full cursor-pointer hover:bg-rose-100 hover:text-rose-500' />
                            </div>

                        </div>
                    ))}
                </div>
            )}
            {showModel && <DeleteModel deleteApp={deleteApp} isOpen={showModel} fetchApps={fetchApps} onClose={() => setShowModel(false)} />}
        </div>
    )
}

export default Apklist