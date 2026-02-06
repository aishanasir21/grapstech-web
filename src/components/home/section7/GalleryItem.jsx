import React from 'react'

const GalleryItem = ({ src, height }) => {
  return (
    <div className="flex flex-col gap-[0.6vw] w-[23vw]">
      
      <img
        src={src}
        className={`w-full ${height} object-cover`}
        alt=""
      />
 <div className='flex flex-row justify-between'>
    <h4 className="uppercase text-[1vw] opacity-60">
        Article
      </h4>

      <p className="text-[1vw] opacity-60">
        5 min read
      </p>

 </div>
      
      <h3 className="text-[1.5vw] leading-snug mt-2">
        Your Guide to Stone Grating
      </h3>

    </div>
  )
}

export default GalleryItem
