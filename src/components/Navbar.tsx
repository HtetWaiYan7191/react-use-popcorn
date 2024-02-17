import React, { ReactNode } from 'react'


const Navbar = ({children} : {children: ReactNode}) => {
  return (
    <nav className='flex items-center justify-between px-8 py-4 text-white bg-purple-600'>
       {children}
    </nav>
  )
}

export default Navbar