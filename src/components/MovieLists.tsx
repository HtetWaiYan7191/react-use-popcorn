import React from 'react'
import Movie from './Movie'

export interface MovieListsProps {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
}
const MovieLists = ({movies, handleShowDetail, selectedMovie} : {movies:MovieListsProps[], selectedMovie:string; handleShowDetail: (id:string) => void }) => {
  return (
    <ul className='flex flex-col movie-list-container'>
      {
        movies?.map((movie) => (
          <Movie handleShowDetail={handleShowDetail} selectedMovie={selectedMovie} movie={movie} key={movie.imdbID} />
        ))
      }

    </ul>
  )
}

export default MovieLists