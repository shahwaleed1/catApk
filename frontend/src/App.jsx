import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Admin from './Admin/Admin.jsx'
import Sidebar from './Admin/Sidebar.jsx'
import Footer from './Components/Footer.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Appdetails from './Components/Appdetails.jsx'
import Adminregister from './Pages/Adminregister.jsx'
import Adminlogin from './Pages/Adminlogin.jsx'
import { Imageinput } from './Components/Imageinput.jsx'
import Admins from './Admin/Admins.jsx'




const App = () => {

  return (
    <>
      <Navbar />
      {/* <Admins /> */}


      {/* <Imageinput /> */}


      {/* <Routes>
        <Route path='/adminlogin' element={<Adminlogin />} />
        <Route path='/adminregister' element={<Adminregister />} />
        <Route path='/adminplane' element={<Admin />} />
        <Route path='/admins' element={<Admins />} />
      </Routes> */}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/appdetails/:id' element={<Appdetails />} />
        <Route path='/adminlogin' element={<Adminlogin />} />
        <Route path='/adminregister' element={<Adminregister />} />
        <Route path='/adminplane' element={<Admin />} />
        <Route path='/admins' element={<Admins />} />
      </Routes>
      <Footer />

      
      {/* <Admin /> */}
    </>
  )
}

export default App