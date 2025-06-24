import React from 'react'

const About = () => {
    return (
        <div className='container p-6 text-neutral-600'>
            <div className="flex items-center h-[30rem] bg-[url('/about_app.webp')] bg-cover bg-center rounded-2xl">
                <div className='wfull p-6 py-18 text-white bg-[#858585e6]'>
                    <h2 className='text-3xl '>About CatModded</h2>
                    <h4 className='text-md'>Welcome to CatModded – Your Trusted Source for Modded APKs!</h4>
                    <p>
                        At CatModded, we believe in unlocking the full potential of your favorite Android apps and games. Our mission is to provide you with safe, tested, and feature-rich modded APKs so you can enjoy premium features for free, without annoying ads, restrictions, or paywalls.
                        Whether you're looking for a powerful video editor, an enhanced social media experience, or unlocked game features — we’ve got it all, and more.
                    </p>
                </div>
                {/* <div className="w-1/2 h-[30rem] bg-[url('/about_app.webp')] bg-cover bg-center rounded-2xl "></div> */}
            </div>
            <div className='mt-10 p-4'>
                <div>
                    <h2 className='text-3xl my-2'>Why Choose CatModded?</h2>
                    <ul className='space-y-2'>
                        <li>100% Verified Mods – Every APK is tested for functionality and safety.</li>
                        <li>Fast & Direct Downloads – No spam, no endless redirects.</li>
                        <li>Completely Free – Enjoy pro-level features without paying a cent.</li>
                        <li>User-Friendly Interface – Easy to browse, search, and download.</li>
                        <li>Cat-Inspired Vibes – Because tech should be fun!</li>
                    </ul>
                </div>
                <div></div>
            </div>
            <div className='mt-10 p-4'>
                <div>
                    <h2 className='text-3xl'>Who We Are</h2>
                    <p>We’re a passionate team of Android enthusiasts, developers, and security experts. Our goal is to make premium app features accessible to everyone. We love what we do – and we’re always updating our site with the latest modded apps.</p>
                </div>
                <div className='text-2xl'>I am Full-stack Developer</div>
            </div>
        </div>
    )
}

export default About