import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import Title from '../home/section1/Title'
import Paragraph from '../home/section1/Paragraph'
import Cards from './Cards'

const Section2 = () => {
    return (
        <div>
            <div className='p-2 h-auto w-auto'>
                <div className='flex flex-col md:flex-row mt-20 md:mt-60 gap-5 md:gap-60 justify-between items-baseline'>
                    <Title text='Results' />
                    <Paragraph className='font-[font4] text-2xl sm:text-3xl md:text-4xl mx-[2vw] leading-tight my-2 pb-6'>
                        From system planning and installation to testing and commissioning, we deliver electro-mechanical solutions that ensure efficiency, safety, and long-term performance.
                    </Paragraph>
                </div>
                <HeroLine />
                <Cards />
            </div>
        </div>
    )
}

export default Section2
