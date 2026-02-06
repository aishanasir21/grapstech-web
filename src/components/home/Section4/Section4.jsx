import React from 'react'
import Title from '../section1/Title'
import Paragraph from '../section1/Paragraph'
import HeroLine from '../hero/HeroLine'


const Section4 = () => {
   return (
      <div className='h-auto w-auto relative pt-[6vw] mx-[1vw]'>
      <Title text='Our Projects'/>
      <div className='flex flex-row justify-between items-center -mb-[7vw]'>
         <Paragraph className='text-[3vw] mx-[1vw] leading-snug mt-1 tracking-wide'>Crafted from natural aggregates. <br />Available in a range of finishes. </Paragraph>
        <Paragraph className='text-[1vw] mx-[4vw] leading-snug mt-4 opacity-50 tracking-wide'>All our decorative stone grating is available in a range of colours,<br />from paler shades like Pearl Mist right through to bold Velvet<br />Black. </Paragraph>
      </div>
      <HeroLine/>
      <img className='p-[2vw]' src='https://jonite-stone.transforms.svdcdn.com/production/images/renders/finishes/PEARLMIST.jpg?w=3000&h=1724&q=90&auto=format&fit=crop&dm=1763997149&s=4d39c74b227b2c8b708f2ded6c6821ec'/>
     
    </div>
  )
}

export default Section4
