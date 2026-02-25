import React from 'react'
import Title from '../section1/Title'
import Paragraph from '../section1/Paragraph'
import HeroLine from '../hero/HeroLine'


const Section4 = () => {
   return (
      <div className='h-auto w-auto relative pt-18 px-3'>
      <Title text='Explore further.'/>
      <div className='flex flex-col lg:flex-row justify-between items-center mb-4 md:mb-10 px-2.5'>
         <Paragraph className='text-3xl md:text-3xl lg:text-4xl lg:w-3/6 w-auto font-[font4] mt-1 leading-tight tracking-wide'>We’re easy to reach and even easier to work with.</Paragraph>
        <Paragraph className='font-[font4] opacity-50 text-sm  mx-0 lg:md-[4vw] w-auto md:2/4 lg:w-2/6 mt-4 tracking-wider'>Delivering quality and trust in every installation, maintenance, and contracting service we provide, always. </Paragraph>
      </div>
      <HeroLine/>
      <img className='px-0 py-5 md:px-4 md:py-12 mb-14' src='https://jonite-stone.transforms.svdcdn.com/production/images/renders/finishes/PEARLMIST.jpg?w=3000&h=1724&q=90&auto=format&fit=crop&dm=1763997149&s=4d39c74b227b2c8b708f2ded6c6821ec'/>
     
    </div>
  )
}

export default Section4
