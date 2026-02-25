import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import Paragraph from "../home/section1/Paragraph";
import Title from '../home/section1/Title.jsx'
import HomeHeroButton from '../home/hero/HomeHeroButton'

const Section1 = () => {
    return (
        <div className='h-auto w-auto relative pt-10 md:pt-20 px-4 mt-15'>
            <div className='text-[8vw] tracking-wide mb-4 font-[font4]'>
                HVAC
            </div>
            <HeroLine />
            <div className='h-auto w-full flex flex-col md:flex-row items-start md:mt-5'>
                <div className='h-auto w-full relative pt-14'>
                    <Title text='overview' />
                    <div className='w-auto md:w-4/6 mb-8'>
                        <Paragraph className='font-[font4] text-2xl md:text-3xl mx-[1vw] mt-2 tracking-wide mb-7'>
                            We design and deliver high-performance HVAC and air-conditioning systems that ensure comfort, energy efficiency, and reliable climate control for residential, commercial, and industrial spaces.
                        </Paragraph>

                        <Paragraph className='font-[font4] text-sm md:text-sm mx-[1vw] mt-4 opacity-55 tracking-wider mb-7'>
                            Our services include system design, installation, testing, and maintenance of air-conditioning, ventilation, and air filtration solutions. We focus on energy optimization, indoor air quality, and long-term operational efficiency to create healthier and more sustainable environments.
                        </Paragraph>
                        <HomeHeroButton className='mx-[1vw]' />
                    </div>
                </div>
                <div className='h-auto w-auto md:h-50 md:w-250 relative pt-14'>
                    <img src="https://jonite-stone.transforms.svdcdn.com/production/images/Thumbnail-images/Jonite_Image_Texture1_2025-07-16-035655_aydy.jpg?w=1800&h=1800&q=90&auto=format&fit=crop&dm=1752638215&s=20e5e1df208f41fa4c4f2f2e89396604" alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Section1

