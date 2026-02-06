import React from 'react'
import HomeHeroButton from '../hero/HomeHeroButton'
import Title from '../section1/Title'
import Paragraph from '../section1/Paragraph'
import HeroLine from '../hero/HeroLine'

const Section5 = () => {
    return (
        <div className="w-full relative pt-[6vw] bg-[#797762] text-white">
            <div className='mx-[1vw] flex flex-row justify-between items-end gap-[4vw]'>
                <Title text='CASE STUDIES' />
                <div className='flex flex-row items-end gap-[4vw]'>
                    <Paragraph className='text-[4vw] mx-[1vw] leading-snug tracking-wide'>Explore our <br />project portfolio</Paragraph>
                    <HomeHeroButton />
                </div>

            </div>
            <div className='-mt-[7vw]'><HeroLine /></div>
            
            <div className="mx-[2vw] flex gap-[2vw]">


                <div className="flex flex-col w-1/2 gap-[4vw] py-[4vw]">
                    <Paragraph className="text-[1.75vw] max-w-[42vw] leading-snug font-extralight">
                        Decorative trench grates in iconic landmarks, sump covers and tree grates surrounding skyscrapers, and custom pool grate designs for leading hotels and resorts.
                    </Paragraph>

                    <div className="flex flex-col gap-[0.8vw]">
                        <div className="bg-white h-[36vw] w-full">
                            
                        </div>
                        <h3 className="text-[1.5vw]">Trench grates</h3>
                        <h4 className="uppercase opacity-50 text-sm">Grates</h4>
                    </div>

                    <div className="flex flex-col gap-[0.8vw]">
                        <div className="bg-white h-[36vw] w-full">
                            
                        </div>
                        <h3 className="text-[1.5vw]">Trench grates</h3>
                        <h4 className="uppercase opacity-50 text-sm">Grates</h4>
                    </div>
                </div>

                <div className="flex flex-col w-1/2 gap-[4vw] mt-[6vw]">
                    <div className="flex flex-col gap-[0.8vw]">
                        <div className="bg-white h-[36vw] w-full">
                            
                        </div>
                        <h3 className="text-[1.5vw]">Trench grates</h3>
                        <h4 className="uppercase opacity-50 text-sm">Grates</h4>
                    </div>

                    <div className="flex flex-col gap-[0.8vw]">
                        <div className="bg-white h-[36vw] w-full">
                            
                        </div>
                        <h3 className="text-[1.5vw]">Trench grates</h3>
                        <h4 className="uppercase opacity-50 text-sm">Grates</h4>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Section5
