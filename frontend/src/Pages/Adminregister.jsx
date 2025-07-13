import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Notyf } from 'notyf';
import { Link, useNavigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import Adminlogin from './AdminLogin';

const Adminregister = () => {

    const [admin, setAdmin] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const navgate = useNavigate()

    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: 'right',
            y: 'top',
        }
    })

    const handleChange = (e) => {
        setAdmin(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleAdmin = async (e) => {
        e.preventDefault();
        console.log(admin)
        try {
            const response = await axios.post(`http://localhost:5000/api/admin/register`, admin);
            console.log(response.data);
            if (response.status == 200) {
                notyf.success('Succesfully Registion!');
                navgate('/adminlogin');
            }
        } catch (err) {
            console.log('Error in Admin Regiser page : ', err)
        }
    }



    return (
        <div className='container min-h-screen flex items-center justify-center text-neutral-700'>
            <div className='p-5 rounded-lg min-w-md shadow-xl'>
                <h3 className='text-3xl text-center font-semibold text-neutral-700'>Admin <span className='text-primary-dark'>Register</span></h3>
                <div className='[&>form>input]:border-primary-dark [&>form>input]:bg-[#E8F0FE] [&>form>input]:border-2 [&>form>input]:p-2 [&>form>input]:ps-4 [&>form>input]:rounded-full [&>form>input]:outline-none mt-8'>
                    <form onSubmit={handleAdmin} className='flex flex-col gap-3'>
                        <input type="text" placeholder='Name' onChange={handleChange} name='name' value={admin.name} />
                        <input type="text" placeholder='Email' onChange={handleChange} name='email' value={admin.email} />
                        <input type="text" placeholder='Password' onChange={handleChange} name='password' value={admin.password} />
                        <button onSubmit={handleAdmin} className='bg-primary-light p-2 rounded-full mt-3 text-white hover:cursor-pointer hover:bg-primary-dark'>Login</button>
                    </form>
                </div>
                <div className='text-center my-3'>
                    <p>Already have an account? <Link to='/Adminlogin' className='text-primary-dark ms-1 font-medium'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Adminregister