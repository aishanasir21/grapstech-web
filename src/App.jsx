import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Service1 from './pages/Service1'
import Service2 from './pages/Service2'
import Service3 from './pages/Service3'
import Service4 from './pages/Service4'
import Service5 from './pages/Service5'

const App = () => {
  return (
    <div>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/insights' element={<Insights />} />

        <Route path='/service1' element={<Service1 />} />
        <Route path='/service2' element={<Service2 />} />
        <Route path='/service3' element={<Service3 />} />
        <Route path='/service4' element={<Service4 />} />
        <Route path='/service5' element={<Service5 />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App