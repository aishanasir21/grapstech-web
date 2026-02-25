import React from 'react'

const HeroImage = () => {
  return (
    <div className="absolute inset-0">
      <img
        src="https://i.pinimg.com/736x/56/39/c7/5639c71407063d20cb6269f5d703c11a.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover"
        loading="eager"
      />

{/* image overlay */}
      <div className="absolute inset-0 bg-black/15 md:bg-black/12" />
    </div>
  )
}

export default HeroImage
