import React from 'react'
import HeroLine from '../hero/HeroLine'
import HomeHeroButton from '../hero/HomeHeroButton'
import Title from '../section1/Title'
import Gallery from './Gallery'

const Section7 = () => {
  return (
    <div className='h-auto w-auto relative mx-[1vw] '>
      <HeroLine/>
      <div className='flex flex-row justify-between my-[4vw] items-center'>
        <Title text='Latest Insights' />
        <HomeHeroButton/>
      </div>
      <Gallery/>
    </div>
  )
}

export default Section7
