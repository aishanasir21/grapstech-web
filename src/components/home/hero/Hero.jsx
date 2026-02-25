import React from 'react'
import HeroImage from './HeroImage'
import HeroContent from './HeroContent'
import HomeHeroButton from './HomeHeroButton'
import Paragraph from '../section1/Paragraph'

const Hero = () => {
  return (
    <section className=' relative h-screen
     w-full overflow-hidden flex flex-col items-center justify-end px-3 text-white'>
      <HeroImage />
      <div className='relative z-10 flex flex-col gap-8 sm:gap-8 md:gap-8 lg:gap-8 mx-5 my-20 justify-center md:w-6xl'>
        <HeroContent/>
        {/* <Paragraph className='font-[font4] tracking-wider text-[12px] md:text-[16px]'>Al-first ERP powering next-gen finance & accounting. General ledger, revenue automation, close management.</Paragraph> */}
      <HomeHeroButton className='py-2 md:py-3' text='Get Started'/>
      </div>
      
    </section>
  )
}

export default Hero
