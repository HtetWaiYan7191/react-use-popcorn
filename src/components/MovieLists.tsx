import React from 'react'
import Movie from './Movie'


export interface MovieListsProps {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
}
const MovieLists = ({movies} : {movies:MovieListsProps[]}) => {
  return (
    <div className='flex flex-col movie-list-container'>
      {
        movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))
      }

    </div>
  )
}

export default MovieLists