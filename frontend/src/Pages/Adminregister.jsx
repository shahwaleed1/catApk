import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Notyf } from 'notyf';
import { Link, useNavigate } from 'react-router-dom';
import Adminlogin from './AdminLogin';
import { Imageinput } from '../Components/Imageinput';
import Buttonloader from '../Components/Buttonloader';

const Adminregister = () => {

    const [adminData, setAdminData] = useState({
        name: '',
        email: '',
        password: '',
        image: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)



    const navgate = useNavigate()

    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: 'right',
            y: 'top',
        }
    })

    const handleChange = (e) => {
        setAdminData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleAdmin = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (!adminData.name || !adminData.email || !adminData.password || !adminData.image) {
            setError('All field required!');
            setLoading(false)
            return
        }


        try {

            const response = await axios.post(`http://localhost:5000/api/admin/register`, adminData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data.isEmail === true) {
                notyf.error('Email is already registered')
                return;
            }

            if (response.status == 200) {
                notyf.success('Succesfully Registion!');
                setTimeout(() => {
                    navgate('/adminlogin');
                }, 1500)
            }

        } catch (err) {
            console.log('Error in Admin Regiser page : ', err)
            // notyf.error('Something went wrong while registering');
            if (err.response.data.message) {
                setError(err.response.data.message)
            }
        }
        finally {
            setLoading(false)
        }
    }



    return (
        <div className='container min-h-screen flex items-center justify-center text-neutral-700'>
            <div className='p-5 rounded-lg min-w-md shadow-xl'>
                <h3 className='text-3xl text-center font-semibold text-neutral-700'>Admin <span className='text-primary-dark'>Register</span></h3>
                <p className='text-center my-2'>Add a new Admins to Access AdminPanel. 👋</p>
                <div className='[&>form>input]:border-primary-dark [&>form>input]:bg-[#E8F0FE] [&>form>input]:border-2 [&>form>input]:p-2 [&>form>input]:ps-4 [&>form>input]:rounded-full [&>form>input]:outline-none'>
                    <form onSubmit={handleAdmin} className='flex flex-col gap-3 mt-1'>
                        <Imageinput onImageSelect={(file) => setAdminData(prev => ({ ...adminData, image: file }))} />
                        <input type="text" placeholder='Name' onChange={handleChange} name='name' value={adminData.name} />
                        <input type="text" placeholder='Email' onChange={handleChange} name='email' value={adminData.email} />
                        <input type="text" placeholder='Password' onChange={handleChange} name='password' value={adminData.password} />
                        {error && <p className='text-center text-red-500 -my-2'>{error}</p>}
                        <button onSubmit={handleAdmin} className='bg-primary-light p-2 rounded-full mt-3 text-white hover:cursor-pointer hover:bg-primary-dark'>{loading ? <Buttonloader /> : 'Register'}</button>
                    </form>
                </div>
                <div className='text-center my-3'>
                    <p>Already have an account? <Link to='/adminlogin' className='text-primary-dark ms-1 font-medium'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Adminregister