import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import Paragraph from '../home/section1/Paragraph'
import Title from '../home/section1/Title'

const Section1 = () => {
    return (
        <div className='h-auto w-auto relative pt-10 md:pt-20 px-4 mt-15'>


            <div className='text-[10vw] tracking-wide mb-4 font-[font4]'>
                Our story
            </div>

            <HeroLine />

            <Paragraph className='p-[1vw] text-[4vw] md:text-[3vw] w-full md:w-2/4 font-light my-5'>
                Since the beginning, it’s been our focus to help people build better.
            </Paragraph>


            <div className='p-[2vw] flex flex-col md:flex-row gap-8 md:gap-[10vw] mb-10'>


                <img
                    className='w-full md:w-[45vw]'
                    src='https://i.pinimg.com/736x/67/8d/be/678dbe26402717660b65eba90db70359.jpg'
                />


                <div className='flex flex-col w-full md:w-[30vw]'>

                    <img
                        className='w-full md:w-[30vw] h-auto md:h-[35vw] mb-[4vw] md:mb-[1.5vw]'
                        src="https://i.pinimg.com/1200x/4d/73/72/4d7372daab9175ee25acbccc7c9a2da5.jpg"
                    />

                   <div className='-mx-[1vw] mt-0 md:mt-10'>
    <Title text='Our mission' />
</div>

<Paragraph className='mt-[2vw] md:mt-[0.5vw] text-[3.5vw] md:text-[1.5vw] font-light'>
    To deliver reliable HVAC, electro-mechanical, and construction solutions that improve building performance, efficiency, and long-term durability.
</Paragraph>

<Paragraph className='mt-[3vw] md:mt-[1vw] text-[3vw] md:text-[1vw] font-extralight'>
    GrapsTech was built on a commitment to quality, precision, and trust. From air-conditioning and MEP installations to interior works, finishing, and maintenance, we support projects at every stage — helping create spaces that perform, last, and add real value.
</Paragraph>
                </div>
            </div>

        </div>
    )
}

export default Section1
