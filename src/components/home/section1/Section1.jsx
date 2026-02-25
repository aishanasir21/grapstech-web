import React from 'react'
import Title from './Title'
import Paragraph from './Paragraph'
import HomeHeroButton from '../hero/HomeHeroButton'
import Clients from './Clients'
import Images from './Images'
import Heading from './Heading'
import SmallPara from './SmallPara'

const Section1 = () => {
  return (
    <div className='h-auto w-full relative pt-14 mb-0 sm:mb-20 px-3'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center items-start gap-2 md:gap-12 lg:gap-20'>
        <Title text='clients' />
        <div className='flex flex-col md:flex-row items-start md:items-center px-2 gap-4 md:gap-6 lg:gap-8'>
          <Paragraph className='font-[font3] tracking-wider uppercase text-[12px] '>For 30+ years, we’ve collaborated with award-winning <br className='hidden md:block sm:hidden' />architects, developers and global brands.</Paragraph>
          <HomeHeroButton className='font-[font4] tracking-wide text-sm' to='/Insights'>
              Our Projects
          </HomeHeroButton>

        </div>
      </div>
      <Clients />
      <Images />
      <div className='flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-15 lg:gap-25'>
        <Heading />
        <SmallPara />
      </div>
    </div>
  )
}

export default Section1
