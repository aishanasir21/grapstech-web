import React from 'react'
import HomeHeroButton from '../hero/HomeHeroButton'
import Title from '../section1/Title'
import Paragraph from '../section1/Paragraph'
import HeroLine from '../hero/HeroLine'

const Section5 = () => {
    return (
        <div className="w-full relative py-16 bg-[#034b78] text-white px-6 md:px-8">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 mb-6">
                <Title text="CASE STUDIES" />
                <div className="flex flex-col md:flex-row items-start md:items-baseline-last gap-4 md:gap-8 mb-7">
                    <Paragraph className="font-[font4] text-4xl mb-4 md:mb-0 md:text-6xl tracking-wide leading-snug">
                        Explore our <br />project portfolio
                    </Paragraph>
                    <HomeHeroButton className='bg-gray-400' />
                </div>
            </div>

            <div className="mb-10 md:mb-12">
                <HeroLine />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

                <div className="flex flex-col gap-8">
                    <Paragraph className="text-lg md:text-[1.75vw] max-w-full md:max-w-[42vw] leading-tight tracking-wide font-extralight mb-0 md:my-5">
                        From advanced air-conditioning systems in landmark developments to electromechanical installations in large-scale commercial projects, our work powers high-performance buildings across diverse sectors.
                    </Paragraph>

                    {[1, 2].map((item) => (
                        <div key={item} className="flex flex-col gap-3">
                            <div className="overflow-hidden w-full h-65 md:h-[36vw]">
                                <div
                                    className="w-full h-full bg-center bg-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                    style={{
                                        backgroundImage:
                                            "url('https://aishanasir21.github.io/testing/golf.jpeg')",
                                    }}
                                ></div>
                            </div>
                            <h3 className="font-[font4] tracking-wider text-lg md:text-[1.5vw] leading-tight">Artificial Grass Work</h3>
                            <h4 className="font-[font3] uppercase text-sm -mt-2">Oasis hills</h4>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-8 mt-8 md:mt-0">
                    {[1, 2].map((item) => (
                        <div key={item} className="flex flex-col gap-3">
                            <div className="overflow-hidden w-full h-65 md:h-[36vw]">
                                <div
                                    className="w-full h-full bg-center bg-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                    style={{
                                        backgroundImage:
                                            "url('https://aishanasir21.github.io/testing/WhatsApp%20Image%202025-12-28%20at%2017.54.03%20copy.jpeg')",
                                    }}
                                ></div>
                            </div>
                            <h3 className="font-[font4] tracking-wider text-lg md:text-[1.5vw] leading-tight">Interior designing</h3>
                            <h4 className="font-[font3] uppercase text-sm -mt-2">Green Valley</h4>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Section5