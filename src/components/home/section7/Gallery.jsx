import React from 'react'
import GalleryItem from './GalleryItem'
import { galleryItems } from './galleryData'

const Gallery = () => {
  return (
   <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 scrollbar-hide">
  {galleryItems.map((item, index) => (
    <div key={index} className="snap-start">
      <GalleryItem
        src={item.src}
        height={item.height}
        title={item.title}
        category={item.category}
        sector={item.sector}
      />
    </div>
  ))}
</div>

  )
}

export default Gallery
