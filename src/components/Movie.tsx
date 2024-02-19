import React from 'react'
import  { MovieListsProps } from './MovieLists'

const Movie = ({movie, handleShowDetail, selectedMovie} : {movie: MovieListsProps,selectedMovie:string; handleShowDetail: (id:string) => void}) => {
  return (
    <li className={`flex ${movie.imdbID === selectedMovie  && 'bg-slate-500'} gap-6 px-3 pt-4 pb-6 border-b cursor-pointer movie-container`} onClick={() => handleShowDetail(movie.imdbID)}>
        <img src={movie.Poster} alt="movie-image" className='object-contain w-24' />
        <div className="movie-title">
          <h2>{movie.Title}</h2>
          <span>{movie.Year}</span>
        </div>
    </li>
  )
}

export default Movie