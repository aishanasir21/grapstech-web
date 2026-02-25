import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import HomeHeroButton from '../home/hero/HomeHeroButton'
import Title from '../home/section1/Title'
import ContactForm from './ContactForm'

const Section1 = () => {

    const generalMessage = encodeURIComponent("Hello Grapstech, I would like to make an enquiry.")
    const buildingMessage = encodeURIComponent("Hello, I would like to enquire about Building Materials.")

    return (
        <div className='h-auto relative pt-[8vw] mx-2 px-2 md:px-0 mt-15 mb-15'>
            
            <div className='flex flex-col md:flex-row items-baseline justify-between px-3'>
                <div className='font-[font4] text-6xl sm:text-6xl md:text-8xl xl:text-[10vw] mb-6'>
                    Contact us
                </div>

                {/* WhatsApp Button */}
                <a 
                    href={`https://wa.me/971505032497?text=${generalMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <HomeHeroButton className='font-[font4] tracking-wide text-sm mb-6'>
                        WhatsApp
                    </HomeHeroButton>
                </a>
            </div>

            <HeroLine />

            <div>
                <img src='src/assets/Screenshot 2026-02-25 at 9.42.49 PM.png' className='my-15 w-auto h-auto md:h-100'/>
            </div>

            <HeroLine />

            {/* GENERAL ENQUIRIES */}
            <div className='flex flex-col md:flex-row px-3 py-6 md:py-12'>
                <div className='font-[font4] w-1/2 text-2xl sm:text-2xl md:text-4xl mb-8 md:mb-0'>
                    For General enquiries
                </div>

                <div className='flex flex-col md:flex-row gap-8 md:gap-50'>

                    {/* Email */}
                    <div className='flex flex-col gap-1'>
                        <h4 className='font-[font3] uppercase opacity-40 text-[12px]'>Email</h4>
                        <a 
                            href={`mailto:grapsdxb@gmail.com?subject=General Enquiry&body=${generalMessage}`}
                            className='font-[font4] text-gray-700 text-[16px] tracking-wide hover:underline'
                        >
                            grapsdxb@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className='flex flex-col gap-1'>
                        <h4 className='font-[font3] uppercase opacity-40 text-[12px]'>Get in touch</h4>
                        <a 
                            href="tel:+971505032497"
                            className='font-[font4] text-gray-700 text-[16px] tracking-wide hover:underline'
                        >
                            +971 50 503 2497
                        </a>
                    </div>

                </div>
            </div>

            <HeroLine />

            {/* BUILDING MATERIAL */}
            <div className='flex flex-col md:flex-row px-3 py-6 md:py-12 mb-2 md:mb-15'>
                <div className='font-[font4] w-1/2 text-2xl sm:text-2xl md:text-4xl mb-8 md:mb-0'>
                    For Building Material
                </div>

                <div className='flex flex-col md:flex-row gap-8 md:gap-50'>

                    {/* Email */}
                    <div className='flex flex-col gap-1'>
                        <h4 className='font-[font3] uppercase opacity-40 text-[12px]'>Email</h4>
                        <a 
                            href={`mailto:zahratalteenbm@gmail.com?subject=Building Material Enquiry&body=${buildingMessage}`}
                            className='font-[font4] text-gray-700 text-[16px] tracking-wide hover:underline'
                        >
                            zahratalteenbm@gmail.com
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className='flex flex-col gap-1'>
                        <h4 className='font-[font3] uppercase opacity-40 text-[12px]'>WhatsApp</h4>
                        <a 
                            href={`https://wa.me/971504541358?text=${buildingMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='font-[font4] text-gray-700 text-[16px] tracking-wide hover:underline'
                        >
                            +971 50 454 1358
                        </a>
                    </div>

                </div>
            </div>

            <HeroLine />

            {/* CONTACT FORM */}
            <div className='my-8 md:my-15'>
                <Title text='CONTACT FORM' />
                <div className='flex flex-col md:flex-row w-full items-baseline justify-end'>
                    <div className='font-[font4] w-1/2 md:w-2/8 text-3xl sm:text-3xl md:text-5xl mx-3 my-5 md:my-7 leading-10 md:leading-15'>
                        Send us a message
                    </div>
                    <ContactForm/>
                </div>
            </div>

        </div>
    )
}

export default Section1