import React from 'react'
import Title from '../home/section1/Title'
import Paragraph from '../home/section1/Paragraph'
import HomeHeroButton from '../home/hero/HomeHeroButton'

const Section2 = () => {
    return (
        <div>


            <div className='p-[4vw] md:p-[2vw] flex flex-col md:flex-row gap-6 md:gap-[10vw] mt-[6vw] md:mt-[4vw] items-start md:items-baseline mb-[8vw] md:mb-[6vw]'>
                <Title text='Present day' />

                <Paragraph className='text-[5vw] md:text-[3vw] font-light max-w-full md:max-w-[70vw] leading-tight'>
                   Today, we go beyond building and maintenance. We also provide a comprehensive supply of high-quality construction materials across the UAE.
                </Paragraph>
            </div>



            <img
                className='w-full'
                src='https://jonite-stone.transforms.svdcdn.com/production/images/Thumbnail-images/Rectangle-155.png?w=4000&h=2222&q=80&auto=format&fit=crop&dm=1748331560&s=9330ca378b6792447574e46055c0cddf'
            />



            <div className='flex flex-col gap-[6vw] md:gap-[4vw] py-[12vw] md:py-[8vw] px-[6vw] md:px-[4vw] items-center bg-[#034b78] text-white'>

                <Paragraph className='text-[6vw] md:text-[4.5vw] font-light max-w-full md:max-w-[78vw] leading-snug'>
                    “At Grapstech, we believe innovation thrives where nature and technology meet. By pushing the boundaries of sustainable materials and composite craftsmanship, we strive to inspire limitless creativity both in our clients and within ourselves.”
                </Paragraph>

                <div className='w-full max-w-full md:max-w-[78vw] flex flex-col gap-[4vw] items-start'>
                    <img
                        className='w-[22vw] md:w-[10vw]'
                        src="src/assets/signaturegen-1771992945695.png"
                    />

                    <div className='flex flex-row gap-[2vw] md:gap-[1vw] items-baseline'>
                        <h4 className='text-[4vw] md:text-[1.5vw]'>Muhammad Nasir</h4>
                        <h5 className='text-[3vw] md:text-[1vw] font-light'>(Sole Owner)</h5>
                    </div>
                </div>
            </div>



            <div className='p-[4vw] md:p-[3vw] flex flex-col md:flex-row mt-[6vw] md:mt-[2vw] gap-8 md:gap-0 justify-between mb-15'>


                <div className='flex flex-col gap-[4vw] md:gap-[2vw] w-full md:w-auto'>
                    <Title text='Grapstech : : From 2009 to Today' />

                    <Paragraph className='text-[4.5vw] md:text-[2.25vw] font-light max-w-full md:max-w-[30vw] leading-tight'>
                        From humble beginnings in 2009, Muhammad Nasir has faced every challenge head-on. Today, his perseverance and hard work have turned struggles into achievements, inspiring growth and success.
                    </Paragraph>

                    <HomeHeroButton to='/projects'>Our Services</HomeHeroButton>
                </div>

  
                <img
                    className='w-full md:w-[43vw]'
                    src="src/assets/aboutimg1.jpeg"
                />
            </div>

        </div>
    )
}

export default Section2
