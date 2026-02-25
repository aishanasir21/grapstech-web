import React from 'react'

const Images = () => {
  return (
    <div className='w-full my-6 sm:my-6 md:my-7 lg:my-12 flex flex-row gap-2 md:gap-[3vw] items-end'>

      <img
        className='w-1/3 h-[42vw] md:w-[27vw] md:h-[37vw] object-cover'
        src='https://i.pinimg.com/736x/f5/86/a0/f586a0e834745b9ef534ad176e047093.jpg'
        alt=''
      />

      <img
        className='w-1/3 h-[25vw] md:w-[20vw] md:h-[23vw] object-cover'
        src='https://i.pinimg.com/1200x/1f/ac/06/1fac060faf011a6062d9dc6eaa9e38ba.jpg'
        alt=''
      />

      <img
        className='w-1/3 h-[45vw] md:w-[35vw] md:h-[42vw] object-cover'
        src='https://i.pinimg.com/736x/da/37/92/da3792af7a1d6edece5724a3bcd53cd9.jpg'
        alt=''
      />

      <img
        className='hidden md:block w-[16vw] h-[26vw] object-cover'
        src='https://i.pinimg.com/736x/4b/8a/d3/4b8ad3c75df60aacaae0bc41bb15b391.jpg'
        alt=''
      />

    </div>
  )
}

export default Images
