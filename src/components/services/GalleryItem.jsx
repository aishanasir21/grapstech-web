import React from 'react'

const GalleryItem = ({ src, height, title, category, sector }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <img
        src={src}
        className={`w-full ${height} object-cover`}
        alt={title}
      />

      <div className='flex justify-between mt-1'>
        <h4 className="font-[font3] uppercase text-[0.6rem] md:text-[0.7rem] opacity-60">
          {category}
        </h4>
        <p className="font-[font3] uppercase text-[0.6rem] md:text-[0.7rem] opacity-60">
          {sector}
        </p>
      </div>

      <h3 className="font-[font4] text-[0.9rem] md:text-[1rem] lg:text-xl leading-tight tracking-wide mt-1">
        {title}
      </h3>
    </div>
  )
}

export default GalleryItem
