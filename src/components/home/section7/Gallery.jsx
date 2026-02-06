import React from 'react'
import GalleryItem from './GalleryItem'

const Gallery = () => {
  return (
    <div className="w-full my-[6vw] flex gap-[2vw] items-start justify-between">
      
      <GalleryItem
        src="https://i.pinimg.com/474x/96/bb/1d/96bb1d09d4e155d44109f0f8ef2b10d6.jpg"
        height="h-[22vw]"
      />

      <GalleryItem
        src="https://i.pinimg.com/474x/96/bb/1d/96bb1d09d4e155d44109f0f8ef2b10d6.jpg"
        height="h-[34vw]"
      />

      <GalleryItem
        src="https://i.pinimg.com/474x/96/bb/1d/96bb1d09d4e155d44109f0f8ef2b10d6.jpg"
        height="h-[22vw]"
      />

      <GalleryItem
        src="https://i.pinimg.com/474x/96/bb/1d/96bb1d09d4e155d44109f0f8ef2b10d6.jpg"
        height="h-[34vw]"
      />

    </div>
  )
}

export default Gallery
