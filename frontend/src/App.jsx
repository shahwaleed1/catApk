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
import AdminLogin from './Pages/AdminLogin.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <AdminLogin />
      {/* 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/appdetails/:id' element={<Appdetails />} />
      </Routes>
      <Footer /> */}
      {/* <Admin /> */}
    </>
  )
}

export default App