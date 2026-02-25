import React from 'react'
import HeroLine from '../hero/HeroLine'
import HomeHeroButton from '../hero/HomeHeroButton'
import Title from '../section1/Title'
import Gallery from './Gallery'

const Section7 = () => {
  return (
    <div className='w-full relative pt-24 px-3 md:px-6 mb-14'>
      <HeroLine />

      <div className='flex flex-row justify-between items-center my-12'>
        <Title text='Latest Insights' />
        <HomeHeroButton/>
      </div>

      <Gallery />
    </div>
  )
}

export default Section7
