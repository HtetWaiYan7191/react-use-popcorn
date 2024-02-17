import React, { ReactNode } from 'react'
import MovieLists from './MovieLists'
import WatchedMovieLists from './WatchedMovieLists'

const Main = ({children} : {children: ReactNode}) => {
  return (
    <main className='flex justify-around gap-4 p-6'>
        {children}
    </main>
  )
}

export default Main