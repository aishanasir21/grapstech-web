import React from 'react'
import Title from '../section1/Title'
import Paragraph from '../section1/Paragraph'
import HeroLine from '../hero/HeroLine'
import Services from './Services'

const Section2 = () => {
  return (
    <div className='h-auto w-full relative pt-25 px-3'>
      <Title text=' our Services'/>
      <Paragraph className='font-[font4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-[1vw] leading-tight m-2 pb-6 md:pb-6'>Reliable services.<br/>Precisely installed & completely maintainable.</Paragraph>
      <HeroLine/>
      <Services/>
    </div>
  )
}

export default Section2
