import React from 'react'
import {Dot} from 'lucide-react'

const Title = ({text, className=''}) => {
  return (
    <div className='flex items-center font-[font3] ${className}'>
      <Dot className='size-5 lg:size-8 ${className}'/>
      <h3 className='tracking-wider uppercase text-[10px] lg:text-[12px] ${className}'>{text}</h3>
    </div>
  )
}

export default Title
