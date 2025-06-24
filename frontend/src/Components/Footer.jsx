import React from 'react'
import { Link } from 'react-router-dom'
import About from '../Pages/About.jsx'
import Contect from '../Pages/Contact.jsx'

const Footer = () => {
    return (
        <div>
            <div className='container p-10'>
                <hr className='border-sky-100' />
            </div>
            <div className='[&>div>a]:text-[#64bbf9] container flex justify-between'>
                <div className='flex flex-col gap-3'>
                    <strong>Infomation</strong>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contect</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <strong>Legal</strong>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Service</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <strong>Copyright & Donate</strong>
                    <Link>Donate</Link>
                    <Link>DMCA</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <strong>Learn More</strong>
                    <div className='flex gap-3'>
                        <Link>FB</Link>
                        <Link>insta</Link>
                    </div>
                    <div>
                        <Link>git</Link>
                    </div>
                </div>
            </div>
            <p className='text-center mt-14 mb-3 '>Copyright © 2025 CatModded All rights reserved.</p>
        </div>
    )
}

export default Footer