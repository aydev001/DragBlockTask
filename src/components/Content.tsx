import React, { ReactNode } from 'react'

interface ContentProps {
    children? : ReactNode
}

const Content: React.FC<ContentProps> = ({children}) => {
  return (
    <div className='min-h-[calc(100vh-65px)] max-h-[calc(100vh-70px)] mt-[5px] bg-white rounded-sm p-[10px] shadow-sm'>
      {children}
    </div>
  )
}

export default Content
