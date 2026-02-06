import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeroButton = () => {
  return (
    <div className='w-[12vw] text-center rounded-full p-1 bg-gray-900'>
      <Link className='text-[1.3vw] text-white  hover:text-gray-100' to='/contact'>Get a Quote</Link>
    </div>
  )
}

export default HomeHeroButton
