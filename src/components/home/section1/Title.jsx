import React from 'react'
import {Dot} from 'lucide-react'

const Title = ({text, className=''}) => {
  return (
    <div className='flex items-center gap-2 ${className}'>
      <Dot className='size-10'/>
      <h3 className='tracking-wider uppercase text-sm'>{text}</h3>
    </div>
  )
}

export default Title
