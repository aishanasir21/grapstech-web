import React from 'react'

const clients = [
    'https://jonite-stone.files.svdcdn.com/production/images/client-logos/Emaar_logo.svg?dm=1763990748',
    'https://jonite-stone.files.svdcdn.com/production/images/client-logos/armanihotels.svg?dm=1763990715',
    'https://jonite-stone.files.svdcdn.com/production/images/client-logos/Whotels.svg?dm=1763990933',
    'https://jonite-stone.files.svdcdn.com/production/images/client-logos/benoy-1.svg?dm=1748359535',
    'https://jonite-stone.files.svdcdn.com/production/images/client-logos/porsche.svg?dm=1748357785',
    'https://jonite-stone.files.svdcdn.com/production/images/client-logos/Emaar_logo.svg?dm=1763990748',
    'https://jonite-stone.files.svdcdn.com/production/images/client-logos/armanihotels.svg?dm=1763990715',
    'https://jonite-stone.files.svdcdn.com/production/images/client-logos/Whotels.svg?dm=1763990933',
    'https://jonite-stone.files.svdcdn.com/production/images/client-logos/benoy-1.svg?dm=1748359535'
]
const Clients = () => {
  return (
    <div className='w-full overflow-hidden py-[10vh]'>
      <div className='flex w-max animate-infiniteScroll gap-[6vw]'>
         {[...clients, ...clients].map((logo,index) => (
            <img key= {index} src={logo} alt= "logo" className='h-[2vw] object-contain ' />
         ))}
      </div>
    </div>
  )
}

export default Clients
