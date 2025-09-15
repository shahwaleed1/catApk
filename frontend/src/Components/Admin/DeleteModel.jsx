import axios from 'axios';
import { Notyf } from 'notyf';
import React, { useEffect } from 'react'

const DeleteModel = ({ isOpen, onClose, deleteApp, fetchApps }) => {

    const baseURL = 'https://catapk-production.up.railway.app'


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);


    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: 'center',
            y: 'top',
        }
    });

    const handlerDelete = async (id) => {
        try {
            const res = await axios.delete(`${baseURL}/api/apps/${id}`);
            if (res.status === 200) {
                notyf.success(res.data.msg)
                onClose()
            }
            fetchApps();
        }
        catch (err) {
            console.error('Error deleting app:', err);
        }

        fetchApps()
    }

    // console.log('model : ', deleteApp)

    // if (!isOpen) return null;


    return (
        <div className='fixed inset-0 h-screen backdrop-blur-[5px] bg-white/10'>
            <div className='flex items-center justify-center h-full'>
                <div className='border border-gray-200/50 p-4 rounded-md w-[500px] shadow-2xl text-zinc-600'>
                    <div className='flex gap-4'>
                        <div className='w-24'>
                            <img className='w-full rounded-md border border-gray-300' src={deleteApp.icon || deleteApp.image} alt="App image" />
                        </div>
                        <div className='leading-4.5'>
                            <h3 className='text-xl font-semibold'>Confirm delete <span className=' px-3 pb-0.5 rounded-full text-white text-sm bg-primary-dark'> {deleteApp.name} </span></h3>
                            <p>Are you sure you want to delete this App? This action cannot be undone.</p>
                        </div>
                    </div>
                    <div className='flex gap-3 justify-end pt-4'>
                        <button onClick={() => handlerDelete(deleteApp._id)} className='py-2 px-4 rounded-md border border-gray-300 cursor-pointer text-white bg-red-600'>Delete</button>
                        <button onClick={onClose} className='py-2 px-4 rounded-md border border-gray-300 cursor-pointer'>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModel

