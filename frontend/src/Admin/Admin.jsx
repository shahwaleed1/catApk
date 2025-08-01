import React, { useState } from 'react'
import Sidebar from './Sidebar'
import UploadAPK from './UploadAPK'
import Apklist from './Apklist'
import Adminregister from '../Pages/Adminregister'
import Admins from './Admins'

const Admin = () => {
    const [activePage, setActivePage] = useState('uploadapk')

    
    return (
        <>
            <div className='flex'>
                <div className='w-[18rem]'>
                    <Sidebar onMenuClick={setActivePage} activePage={activePage}/>
                </div>
                <div className='w-full p-4 mt-5'>
                    {activePage === 'uploadapk' &&  <UploadAPK />}
                    {activePage === 'apklist' && <Apklist />}
                    {activePage === 'admins' && <Admins />}
                    {activePage === 'adminregister' && <Adminregister />}
                </div>
            </div>
        </>
    )
}

export default Admin