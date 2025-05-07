import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import AboutMePage from './Pages/AboutMePage.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import ProjectPage from './Pages/ProjectPage.jsx'
import SkillsPage from './Pages/SkillsPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'

function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/about-me' element={<AboutMePage/>}/>
              <Route path='/projects' element={<ProjectPage/>} />
              <Route path='/my-skills' element={<SkillsPage/>} />
              <Route path='/contact-me' element={<ContactPage/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
