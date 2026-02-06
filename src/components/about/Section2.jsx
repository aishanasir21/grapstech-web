import React from 'react'
import Title from '../home/section1/Title'
import Paragraph from '../home/section1/Paragraph'
import { Signature } from 'lucide-react'
import HomeHeroButton from '../home/hero/HomeHeroButton'

const Section2 = () => {
    return (
        <div>
            <div className='p-[2vw] flex flex-row gap-[10vw] mt-[4vw] items-baseline mb-[6vw]'>
                <Title text='Present day' />
                <Paragraph className='text-[3vw] font-light max-w-[70vw] leading-tight'>A generation on, we’re still challenging what’s possible in urban design—shaped by our roots in Singapore, a city at the crossroads of East and West.</Paragraph>
            </div>


            <img className='w-full' src='https://jonite-stone.transforms.svdcdn.com/production/images/Thumbnail-images/Rectangle-155.png?w=4000&h=2222&q=80&auto=format&fit=crop&dm=1748331560&s=9330ca378b6792447574e46055c0cddf' />


            <div className='flex flex-col gap-[4vw] py-[8vw] px-[4vw] items-center bg-[#797762] text-white'>
                <Paragraph className='text-[4.5vw] font-light max-w-[78vw] leading-snug '>
                    “At Jonite, we believe innovation thrives where nature and technology meet. By pushing the boundaries of sustainable materials and composite craftsmanship, we strive to inspire limitless creativity—both in our clients and within ourselves.”
                </Paragraph>
                 <div className='w-full max-w-[78vw] flex flex-col gap-[4vw] items-start'>
                    <img className='w-[8vw]' src="https://jonite-stone.files.svdcdn.com/production/images/Lexter_black.svg?dm=1748248485" />
                    <div className='flex flex-row gap-[1vw] items-baseline'>
                        <h4 className='text-[1.5vw]'>Lexter Chen</h4>
                        <h5 className='text-[1vw] font-light'>General Manager</h5>
                    </div>
                </div>
            </div>


            <div className='p-[3vw] flex flex-row mt-[2vw] justify-between'>
                <div className='flex flex-col gap-[2vw]'>
                    <Title text='Sustainability + UAE'/>
                    <Paragraph className='text-[2.25vw] font-light max-w-[30vw] leading-tight'>We’re committed to creating high-performance hardscaping products for modern urban living that have minimal impact on our environment.
                    </Paragraph>
                    <HomeHeroButton/>
                </div>
                <img className='w-[43vw]' src="https://jonite-stone.transforms.svdcdn.com/production/images/Case-Studies/Australia/Image.png?w=1800&h=1800&q=90&auto=format&fit=crop&dm=1748331539&s=9404869d7ba973acd3ca507ceefaea02" />
            </div>
        </div>
    )
}

export default Section2
