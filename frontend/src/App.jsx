import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Admin from './Admin/Admin.jsx'
import Sidebar from './Admin/Sidebar.jsx'

const App = () => {
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
      {/* <Sidebar /> */}
      <Admin />
    </>
  )
}

export default App