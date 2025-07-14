import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Adminlogin = () => {
  const [adminLogin, setAdminLogin] = useState({
    email: '',
    password: ''
  });

  const navgate = useNavigate()

  const handleChange = (e) => {
    setAdminLogin(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    // console.log(adminLogin);

    if(!adminLogin.email || !adminLogin.password){
      alert('fill the form!')
      return
    }

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', adminLogin);
      if (response.status == 200) {
        navgate('/adminplane')
      }
    } catch (err) {
      console.log('Error in Admin Login :', err)
    }
  }


  return (
    <div className='container min-h-screen flex items-center justify-center text-neutral-700'>
      <div className='p-5 rounded-lg min-w-md shadow-xl'>
        <h3 className='text-3xl text-center font-semibold text-neutral-700'>Admin <span className='text-primary-dark'>Login</span></h3>
        <div className='[&>form>input]:border-primary-dark [&>form>input]:bg-[#E8F0FE] [&>form>input]:border-2 [&>form>input]:p-2 [&>form>input]:ps-4 [&>form>input]:rounded-full [&>form>input]:outline-none mt-8'>
          <form onSubmit={handleAdminLogin} className='flex flex-col gap-3'>
            <input type="text" placeholder='Email' name='email' value={adminLogin.email} onChange={handleChange} />
            <input type="text" placeholder='Password' name='password' value={adminLogin.password} onChange={handleChange} />
            <button onSubmit={handleAdminLogin} className='bg-primary-light p-2 rounded-full mt-3 text-white hover:cursor-pointer hover:bg-primary-dark'>Login</button>
          </form>
        </div>
        <div className='text-center my-3'>
          <p>Don't have an account? <Link to='/adminregister' className='text-primary-dark ms-1 font-medium'>Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Adminlogin