import React from 'react'
import HeroMainImage from './HeroMainImage'
import HomeHeroText from './HomeHeroText'
import HomeBottomText from './HomeBottomText'
import HomeHeroButton from './HomeHeroButton'
import HeroLine from './HeroLine'

const Hero = () => {
  return (
    <div className='relative h-[92vh]'>
      <div className="sticky top-0 h-[92vh] w-full -z-10">
        <HeroMainImage />
      </div>
      <div className='absolute top-0 w-full h-full flex flex-col px-[6vw] gap-[4vw] pt-[20vw] '>
        <div className='flex flex-col items-center justify-center gap-[2vw] '>
          <HomeHeroText />
          <HomeBottomText />
        </div>
        <HomeHeroButton />
      </div>
    </div>
  )
}

export default Hero
