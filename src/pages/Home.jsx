import React from 'react'
import Hero from '../components/home/hero/Hero'
import Section1 from '../components/home/section1/Section1'
import Section2 from '../components/home/section2/Section2'
import Section3 from '../components/home/section3/Section3'
import Section4 from '../components/home/Section4/Section4'
import Section5 from '../components/home/section5/Section5'
import Section7 from '../components/home/section7/Section7'

const Home = () => {
  return (
    <div className='overflow-hidden bg-[#9999993e]'>
     <Hero/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section7/>
    </div>
  )
}

export default Home
