import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import HomeHeroButton from '../home/hero/HomeHeroButton'
import Title from '../home/section1/Title'
import Gallery from './Gallery'

const Section7 = () => {
  return (
    <div className='w-full relative pt-24 px-3 md:px-6 mb-15'>
      <HeroLine />

      <Gallery />
    </div>
  )
}

export default Section7
