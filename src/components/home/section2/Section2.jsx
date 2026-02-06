import React from 'react'
import Title from '../section1/Title'
import Paragraph from '../section1/Paragraph'
import HeroLine from '../hero/HeroLine'
import Services from './Services'

const Section2 = () => {
  return (
    <div className='h-auto w-full relative pt-[10vw] mx-[1vw]'>
      <Title text=' our Services'/>
      <Paragraph className='text-[4.5vw] mx-[1vw] leading-tight -mb-[7vw] mt-3'>High-performance hardscaping.<br/> Consciously crafted + fully customisable.</Paragraph>
      <HeroLine/>
      <Services/>
    </div>
  )
}

export default Section2
