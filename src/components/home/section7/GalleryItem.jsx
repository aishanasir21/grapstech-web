import React from 'react'

const GalleryItem = ({ src, height, title, category, sector }) => {
  return (
    <div className="flex flex-col gap-2 w-[55vw] sm:w-[55vw] md:w-[22vw] shrink-0">
      <img
        src={src}
        className={`w-full ${height} object-cover`}
        alt={title}
      />

      <div className='flex justify-between mt-1'>
        <h4 className="font-[font3] uppercase text-[0.5rem] sm:text-[0.6rem] md:text-[0.7rem] opacity-60">{category}</h4>
        <p className="font-[font3] uppercase text-[0.5rem] sm:text-[0.6rem] md:text-[0.7rem] opacity-60">{sector}</p>
      </div>

      <h3 className="font-[font4] text-[0.75rem] sm:text-[0.9rem] md:text-[1rem] lg:text-xl leading-tight tracking-wide mt-0 lg:mt-2">{title}</h3>
    </div>
  )
}

export default GalleryItem
