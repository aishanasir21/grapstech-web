import React from 'react'

const Paragraph = ({children, className = ''}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Paragraph
