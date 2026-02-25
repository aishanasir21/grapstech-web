import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import Title from '../home/section1/Title'
import Paragraph from '../home/section1/Paragraph'
import HomeHeroButton from '../home/hero/HomeHeroButton'
const Section1 = () => {
    return (
        <div className='h-auto w-auto relative pt-10 md:pt-20 px-4 mt-15'>
            <div className='text-[10vw] tracking-wide mb-4 font-[font4]'>
                 Insights
            </div>
            <HeroLine />
            <div className='flex flex-col-reverse md:flex-row justify-start gap-0'>
                <div className='h-auto w-auto md:w-1/2 relative mt-2 md:mt-12'>
                    <Title text='latest post' />
                    <Paragraph className='font-[font4] text-2xl sm:text-3xl md:text-4xl mx-[1vw] leading-tight my-2 pb-4 md:pb-18 capitalize md:w-3/4'>
                        You can view our recent work</Paragraph>
                    <Paragraph className='font-[font4] opacity-50 text-sm lg:md-[4vw] mx-[1vw] w-auto md:w-3/4 lg:w-2/3 my-6 md:my-8 tracking-wider'>All our mechanical, electrical, and finishing solutions come in multiple configurations, engineered for reliability and optimized performance. Built with quality components and adaptable to a wide range of project specifications.We contribute to projects that define modern built environments.</Paragraph>
                    <HomeHeroButton className='mx-[1vw]'>Contact us</HomeHeroButton>
                </div>


                <div className='w-full md:w-1/2 my-10 mt-10 md:my-10 md:mx-5'>
                    <img
                        className="w-full h-auto object-cover"
                        src="https://jonite-stone.transforms.svdcdn.com/production/images/blog-images/JN_Site_Insight_Hero_YourGuideToStoneGrating.png?w=1800&h=1440&q=90&auto=format&fit=crop&dm=1769051947&s=8674c144c3c083fa5c011065fc94e040"
                        alt="texture"
                    />
                </div>
            </div>
        </div>
    )
}

export default Section1
