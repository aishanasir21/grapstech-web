import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import HomeHeroButton from '../home/hero/HomeHeroButton'

const Section1 = () => {
    return (
        <div className='h-auto w-full relative pt-[8vw] mx-[1vw]'>
            <div className='flex flex-row items-baseline justify-between px-[2vw] -mb-[9vw]'>
                <div className='text-[10vw] tracking-wide'>
                    Contact us
                </div>
                <HomeHeroButton />
            </div>
            <HeroLine />
            <div className='flex flex-row px-[2vw] py-[4.5vw] -mb-[11vw]'>
                <div className='w-1/2 text-[2.25vw]'>General enquiries</div>
                <div className='flex flex-row gap-[12vw]'>
                    <div className='flex flex-col'>
                        <h4 className='text-[1.15vw] font-extralight'>Email</h4>
                        <h4 className='text-[1.25vw]'>grapstech@gmail.com</h4>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[1.15vw] font-extralight'>Get in touch</h4>
                        <h4 className='text-[1.25vw]'>Fill out the contact form ↓</h4>
                    </div>
                </div>
            </div>
            <HeroLine />
            <div>
                <div>

                </div>
                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
