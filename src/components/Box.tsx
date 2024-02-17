import React, { ReactNode } from 'react'

const Box = ({children} : {children: ReactNode}) => {
  return (
    <div className='flex-1 overflow-y-auto max-h-[600px] relative text-white bg-slate-800 min-h-[500px] overflow-hidden  mt-6 rounded-md'>
      {children}
    </div>
  )
}

export default Box