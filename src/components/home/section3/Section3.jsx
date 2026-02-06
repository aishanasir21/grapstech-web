import React from 'react'
import Title from '../section1/Title'
import Paragraph from '../section1/Paragraph'
import Qualities from './Qualities'


const Section3 = () => {
  return (
      <div className='h-auto w-full relative pt-[8vw] mx-[1vw]'>
      <Title text='WHY US?'/>
      <Paragraph className='text-[2vw] mx-[1vw] leading-snug mt-1 tracking-wide'>We’re changing the way the world sees <br />engineered stone architectural products. And <br />we’re building a more sustainable future in the <br />process.</Paragraph>
      <Paragraph className='text-[1vw] mx-[1vw] leading-snug mt-4 opacity-50 tracking-wide'>Over the years, we’ve evolved and enhanced the way we work with composite<br />materials, architects and urban designers—creating decorative stone grates,<br />covers and blocks that don’t just stand up to natural stone and steel, but stand<br />above them. </Paragraph>
      <Qualities/>
    </div>
  )
}

export default Section3
