import React from 'react'
import Title from './Title'
import Paragraph from './Paragraph'
import HomeHeroButton from '../hero/HomeHeroButton'
import Clients from './Clients'
import Images  from './Images'
import Heading from './Heading'
import SmallPara from './SmallPara'

const Section1 = () => {
  return (
    <div className='h-auto w-full relative pt-[4vw] mx-[1vw]'>
     <div className='flex flex-row items-center gap-[40vw]'>
      <Title text='clients'/>
      <div className='flex flex-row items-center gap-[3vw]'>
      <Paragraph className='uppercase text-sm'>For 30+ years, we’ve collaborated with award-winning <br/>architects, developers and global brands.</Paragraph>
      <HomeHeroButton/>
      </div>
     </div>
      <Clients/>
      <Images/>
      <div className='flex flex-row items-center gap-[13vw]'>
        <Heading/>
        <SmallPara/>
      </div>
    </div>
  )
}

export default Section1
