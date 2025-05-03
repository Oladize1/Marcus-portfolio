import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import AboutMePage from './Pages/AboutMePage.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/about-me' element={<AboutMePage/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
