import React from 'react'
import Title from '../section1/Title'
import Paragraph from '../section1/Paragraph'
import Qualities from './Qualities'


const Section3 = () => {
  return (
      <div className='h-auto w-full relative pt-14 px-3'>
      <Title text='HOW WE DIFFER'/>
      <div className='w-auto md:w-2/4 mb-8'>
        <Paragraph className='font-[font4] text-2xl md:text-3xl mx-[1vw] mt-1 tracking-wide mb-7'>These 3 principles show how we work and why our partners stick with us — a clear perspective that guides every decision we make.</Paragraph>
      <Paragraph className='font-[font4] text-sm md:text-sm mx-[1vw] mt-3 opacity-55 tracking-wide'>What sets Graps Tech apartment isn't just our capabilities. It's how we show up and how we treat the people we work with. We bring a rare mix of humanity and clarity to every project always keeping our investors, residents and community in view. We don’t posture — we perform. Every handshake, every hard conversation, every smart risk we take is part of building something that lasts.</Paragraph>
      </div>
      <Qualities/>
    </div>
  )
}

export default Section3
