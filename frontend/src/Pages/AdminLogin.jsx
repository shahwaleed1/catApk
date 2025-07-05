import React from 'react'

const AdminLogin = () => {
  return (
    <div className='container min-h-screen flex items-center justify-center text-neutral-700'>
        <div className='p-5 rounded-lg min-w-md shadow-xl'>
            <h3 className='text-3xl text-center font-semibold text-neutral-700'>Admin <span className='text-lime-600'>Login</span></h3>
            <div className='[&>form>input]:border-lime-200 [&>form>input]:border-2 [&>form>input]:p-2 [&>form>input]:ps-4 [&>form>input]:rounded-full [&>form>input]:outline-none mt-8'>
                <form className='flex flex-col gap-3'>
                    <input type="text" placeholder='Name' className='' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password'/>
                    <button className='bg-lime-600 p-2 rounded-full mt-3 text-white'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin