import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import Title from '../home/section1/Title'
import Paragraph from '../home/section1/Paragraph'

const Section3 = () => {
    return (
        <div className="w-full mb-15">

            <div className='pt-16 px-4 md:px-10 lg:px-20'>
                <Title text='Our principles' />
                <Paragraph className='font-[font4] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mt-2 pb-6'>
                    Made to matter
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
                        Made by nature.
                    </Paragraph>
                    <Paragraph className="font-[font4] text-sm opacity-60 tracking-wider">
                        All our decorative grates, covers and blocks are crafted using at least 95% natural aggregates—with up to 30% made from recycled content. The result: a more sustainable product—and a natural-looking, long-lasting finish.
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
                        Made to measure.
                    </Paragraph>
                    <Paragraph className="font-[font4] text-sm opacity-60 tracking-wider">
                        With endless customization options, we can create grates for any space and specification. The fact that many of our products are made to order means better results and less unnecessary waste.
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
                        Made to last.
                    </Paragraph>
                    <Paragraph className="font-[font4] text-sm opacity-60 tracking-wider">
                       Jonite products are designed to last a lifetime. Our stone composite can handle loads in the same way steel or cast iron can—but with zero rust or corrosion and a flawless finish for life.
                    </Paragraph>
                </div>
            </div>


        </div>
    )
}

export default Section3
