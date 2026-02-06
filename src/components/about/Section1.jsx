import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import Paragraph from '../home/section1/Paragraph'
import Title from '../home/section1/Title'

const Section1 = () => {
    return (
        <div className='h-auto w-full relative pt-[8vw] mx-[1vw]'>
            <div className='text-[10vw] tracking-wide -mb-[9vw] px-[2vw]'>
                Our story
            </div>
            <HeroLine />
            <Paragraph className='p-[2vw] text-[3vw] w-2/4 font-light'>Since the beginning, it’s been our focus to help people build<br/> better.</Paragraph>
            <div className='p-[2vw] flex flex-row gap-[10vw] -mb-[5vw]' >
                <img className='w-[45vw]' src='https://jonite-stone.transforms.svdcdn.com/production/images/Thumbnail-images/jonite-14.jpg?w=1800&h=1592&q=90&auto=format&fit=crop&dm=1751879737&s=f1a9f22d1bf2228d877ed47c1936a98f'/>
                <div className='flex flex-col w-[30vw]'>
                    <img className='h-[35vw] w-[30vw] mb-[1.5vw]' src="https://jonite-stone.transforms.svdcdn.com/production/images/Thumbnail-images/Jonite_Image_Craftmanship.jpg?w=800&h=888&q=90&auto=format&fit=crop&dm=1752040155&s=a6da39728fb2d75935ba49a788faf09b"  />
                    <div className='-mx-[1vw]'><Title text='Our mission'/></div> 
                     <Paragraph className='mt-[0.5vw] text-[1.5vw] font-light'>Find stronger, more sustainable alternatives to natural stone, evolve and enhance the way we work with composite materials, and spark endless creativity.</Paragraph>
                     <Paragraph className='mt-[1vw] text-[1vw] font-extralight'>It began with a belief—that even the most overlooked parts of a city could be reimagined with intention and beauty. In 1994, this belief led to the creation of the world’s first composite drain cover. And it’s what continues to guide us today.</Paragraph>
                </div>
                
            </div>
            <HeroLine />
        </div>

    )
}

export default Section1
