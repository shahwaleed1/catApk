import React from 'react'
import { IoIosSend } from "react-icons/io";


const Contact = () => {
    return (
        <div className='container my-6 text-neutral-600'>
            <div className='flex justify-between '>
                <div className='pe-3 p-1'>
                    <div>
                        <h2 className='text-3xl mb-2'>Contact Us – Let’s Talk!</h2>
                        <p>Have a question? Found a broken link? Want us to upload a specific modded app or game?</p>
                        <p>We’d love to hear from you!</p>
                        <p>At CatModded, your feedback helps us grow and keep delivering the best modded APK experience.</p>
                    </div>
                    <div className='[&>p]:ps-3 [&>h3]:ps-1 mt-8 space-y-2'>
                        <h2 className='text-3xl'>Get in Touch</h2>
                        <h3 className='text-xl'>General Inquiries</h3>
                        <p>If you have questions about our mods, features, or site navigation, feel free to reach out.</p>
                        <h3 className='text-xl'>Report an Issue</h3>
                        <p>Spotted a broken download link, a mod that doesn’t work, or a security issue? Let us know and we’ll fix it ASAP.</p>
                        <h3 className='text-xl'>Request a Mod</h3>
                        <p>Can’t find a modded version of your favorite app or game? Submit a request and we’ll try to upload it soon.</p>
                    </div>
                </div>
                <div className='rounded-md p-3 ms-2 w-1/2 bg-[#f1f1f173]'>
                    <form className='[&>input]:p-1.5 [&>input]:ps-3 [&>input]:border-[#538db6] [&>input]:border-2  [&>input]:outline-0 [&>input]:w-full [&>input]:rounded-md flex flex-col gap-3 p-3 '>
                        <input type="text" placeholder='Enter your Name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea className='border-2 border-[#538db6] outline-none rounded-md p-2 resize-none' id="" placeholder='Message' rows={6} ></textarea>
                        <a className='bg-[#3d89be] text-white py-2 rounded-md inline-flex items-center justify-center gap-2' href='mailto:waleeddev4@gmail.com'>Send Mail <IoIosSend className='text-lg' /></a>
                    </form>
                </div>
            </div>
            <div className='mt-15 p-2'>
                <h2 className='text-3xl'>Follow Us</h2>
                <p>Stay updated with the latest mods, tips, and updates:</p>
            </div>
        </div>
    )
}

export default Contact