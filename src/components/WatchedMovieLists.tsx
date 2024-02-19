import React from 'react'
import { watchMovieProps } from '../types/type'
import WatchMovie from './WatchMovie'

const WatchedMovieLists = ({watchMovies} : {watchMovies: watchMovieProps[]}) => {
  return (
    <div className=''>
      {
        watchMovies.reverse().map((movie) => (
          <WatchMovie key={movie.imdb} movie={movie}/>
        ))
      }
    </div>
  )
}

export default WatchedMovieLists