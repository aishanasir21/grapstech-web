import React from 'react'
import HeroLine from '../home/hero/HeroLine'
import Paragraph from '../home/section1/Paragraph'

const cardData = [
  {
    number: "50+",
    text: "Successful electro-mechanical installations completed across commercial and industrial projects."
  },
  {
    number: "100%",
    text: "Compliance with safety standards, quality regulations, and performance testing for every installation."
  },
  {
    number: "24/7",
    text: "Technical support and maintenance services to ensure continuous and reliable system operation."
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
