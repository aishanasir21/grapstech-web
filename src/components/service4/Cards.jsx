import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import Paragraph from '../home/section1/Paragraph'

const cardData = [
  {
    number: "16x",
    text: "We’re proud to be the only grate manufacturer with four ticks under the SGBC Architectural Drain Covers category. Plus, we’ve earned other global accreditations for our commitment towards recycling."
  },
  {
    number: "24x",
    text: "Our products meet global quality standards and support sustainable infrastructure development worldwide."
  },
  {
    number: "40x",
    text: "We focus on innovation and durability to deliver long-lasting drainage solutions."
  }
]

const Cards = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 max-w-6xl mx-auto">
        
        {cardData.map((card, index) => (
          <div
            key={index}
            className="
              bg-[#9e9e9e1f] p-6 rounded-xl shadow-sm
              flex flex-col
              md:h-105 md:justify-between
              hover:shadow-md transition duration-300
            "
          >

            <div>
              <div className="font-[font4] text-5xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wide mb-6 md:mb-10">
                {card.number}
              </div>

              <HeroLine />
            </div>


            <Paragraph className="font-[font4] text-sm mt-6 md:mt-0 opacity-60 tracking-wider">
              {card.text}
            </Paragraph>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Cards
