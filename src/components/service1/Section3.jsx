import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import Title from '../home/section1/Title'
import Paragraph from '../home/section1/Paragraph'

const Section3 = () => {
    return (
        <div className="w-full mb-15">

            <div className='pt-16 px-4 md:px-10 lg:px-20'>
                <Title text=' Our standards' />
                <Paragraph className='font-[font4] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mt-2 pb-6'>
                   Engineered for performance.
                </Paragraph>
                <HeroLine />
            </div>

            <div className='flex flex-col md:flex-row items-center gap-10 px-4 md:px-10 lg:px-20 py-10'>

                <div className='w-full md:w-1/2'>
                    <img
                        className="w-full h-auto object-cover"
                        src="https://jonite-stone.transforms.svdcdn.com/production/images/Thumbnail-images/jonite-11.jpg?w=1800&h=1353&q=90&auto=format&fit=crop&dm=1752456781&s=62b483f814a96f29fbe4f49d97db517c"
                        alt="texture"
                    />
                </div>

                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <Paragraph className='font-[font4] text-2xl md:text-3xl lg:text-4xl leading-tight pb-4'>
                      Designed for efficiency.
                    </Paragraph>
                    <Paragraph className="font-[font4] text-sm opacity-60 tracking-wider">
                       Our HVAC systems are carefully engineered to reduce energy consumption while delivering consistent cooling, heating, and ventilation performance.
                    </Paragraph>
                </div>
            </div>

            <HeroLine />

            <div className='flex flex-col md:flex-row-reverse items-center gap-10 px-4 md:px-10 lg:px-20 py-10'>

                <div className='w-full md:w-1/2'>
                    <img
                        className="w-full h-auto object-cover"
                        src="https://jonite-stone.transforms.svdcdn.com/production/images/Thumbnail-images/jonite-8.jpg?w=1800&h=1353&q=90&auto=format&fit=crop&dm=1752051908&s=e45431fcd8afe8c6b2c9a2885a4e5243"
                        alt="texture"
                    />
                </div>

                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <Paragraph className='font-[font4] text-2xl md:text-3xl lg:text-4xl leading-tight pb-4'>
                       Built for clean air.
                    </Paragraph>
                    <Paragraph className="font-[font4] text-sm opacity-60 tracking-wider">
                       We integrate advanced air filtration and ventilation systems to improve indoor air quality, remove contaminants, and create healthier environments.
                    </Paragraph>
                </div>
            </div>

            <HeroLine />

            <div className='flex flex-col md:flex-row items-center gap-10 px-4 md:px-10 lg:px-20 py-10'>

                <div className='w-full md:w-1/2'>
                    <img
                        className="w-full h-auto object-cover"
                        src="https://jonite-stone.transforms.svdcdn.com/production/images/Thumbnail-images/jonite-10.jpg?w=1800&h=1353&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.4421&fp-y=0.0631&dm=1752635122&s=f1ed70c822215ded11a86bb84a8c017e"
                        alt="texture"
                    />
                </div>

                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <Paragraph className='font-[font4] text-2xl md:text-3xl lg:text-4xl leading-tight pb-4'>
                        Built to last.
                    </Paragraph>
                    <Paragraph className="font-[font4] text-sm opacity-60 tracking-wider">
                       We use high-quality equipment and professional installation practices to ensure long-term reliability, low maintenance, and optimal system lifespan.
                    </Paragraph>
                </div>
            </div>


        </div>
    )
}

export default Section3
