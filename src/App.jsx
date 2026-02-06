import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='text-gray-950'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/services'>Services</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
      
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/services' element={<Services />} />
       <Route path='/projects' element={<Projects />} />
       <Route path='/contact' element={<Contact />} />
     </Routes>
    </div>
  )
}

export default App
