import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Component } from './Components/Component.jsx'
import HomePage from './Pages/HomePage.jsx'
function App() {
 

  return (
    <>
    <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/test' element={<Component/>} />
        </Routes>
      
    </>
  )
}

export default App
