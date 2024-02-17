import React from 'react'
import  { MovieListsProps } from './MovieLists'

const Movie = ({movie} : {movie: MovieListsProps}) => {
  return (
    <div className='flex gap-6 px-3 pt-4 pb-6 border-b movie-container'>
        <img src={movie.Poster} alt="movie-image" className='object-contain w-24' />
        <div className="movie-title">
          <h2>{movie.Title}</h2>
          <span>{movie.Year}</span>
        </div>
    </div>
  )
}

export default Movie