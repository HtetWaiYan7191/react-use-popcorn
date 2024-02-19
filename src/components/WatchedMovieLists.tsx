import React from 'react'
import { watchMovieProps } from '../types/type'
import WatchMovie from './WatchMovie'

const WatchedMovieLists = ({watchMovies, handleRemoveWatchMovie} : {watchMovies: watchMovieProps[]; handleRemoveWatchMovie: () => void}) => {
  return (
    <>
      {
        watchMovies.reverse().map((movie) => (
          <WatchMovie key={movie.imdb} movie={movie} handleRemoveWatchMovie={handleRemoveWatchMovie} />
        ))
      }
    </>
  )
}

export default WatchedMovieLists