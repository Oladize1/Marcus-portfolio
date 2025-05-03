import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
              <Route path='/' element={<HomePage/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
