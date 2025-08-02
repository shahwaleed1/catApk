import axios from 'axios';
import { Notyf } from 'notyf';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Buttonloader from '../Components/Buttonloader';

const Adminlogin = () => {
  const [adminLogin, setAdminLogin] = useState({
    email: '',
    password: ''
  });
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);



  const navgate = useNavigate()


  const notyf = new Notyf({
    duration: 3000,
    position: {
      y:  'top',
      x: 'right'
    }
  })


  const handleChange = (e) => {
    setAdminLogin(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    // console.log(adminLogin);

    if(!adminLogin.email || !adminLogin.password){
      notyf.error('Fill the Form')
      setLoading(false)
      return
    }


    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', adminLogin);
     
      setMsg(response.data.message);
      

      if (response.status === 200) {
        notyf.success('Success login!')
        setTimeout(() => {
          navgate('/adminplane')
        },1500)
      }


    } catch (err) {
      console.log('Error in Admin Login :', err)

      if (err.response.data.message) {
        setMsg(err.response.data.message);
      } else {
        setMsg('Something went wrong');
      }
    }
    finally {
      setLoading(false)
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
            {msg && <p className='text-red-500 text-center -my-2'>{msg}</p>}
            <button onSubmit={handleAdminLogin} className='bg-primary-light p-2 rounded-full mt-3 text-white hover:cursor-pointer hover:bg-primary-dark'>{ loading ? <Buttonloader /> : 'Login'}</button>
          </form>
        </div>
        <div className='text-center my-3'>
          {/* <p>Don't have an account? <Link to='/adminregister' className='text-primary-dark ms-1 font-medium'>Register</Link></p> */}
        </div>
      </div>
    </div>
  )
}

export default Adminlogin