import React from 'react'
import { watchMovieProps } from '../types/type'

const WatchedSummary = ({watchMovies} : {watchMovies: watchMovieProps[]}) => {
  const avgImdbStar = watchMovies?.length > 0 ?
  watchMovies
    .map(movie => movie.imdbRating) // Map ratings
    .filter(rating => !isNaN(rating)) // Filter out invalid ratings
    .reduce((acc, curr) => acc + curr ,0) / watchMovies.length // Calculate average
  : 0; // Default value if watchMovies is empty

const avgUserStar = watchMovies?.length > 0 ?
  watchMovies
    ?.map(movie => movie.userRating) // Map ratings
    .filter(rating => !isNaN(rating)) // Filter out invalid ratings
    .reduce((acc, curr) => acc + curr, 0) / watchMovies.length // Calculate average
  : 0; // Default value if watchMovies is empty

const avgTime = watchMovies?.length > 0 ?
  watchMovies
    ?.map(movie => movie.runtime) // Map runtimes
    .filter(runtime => !isNaN(runtime)) // Filter out invalid runtimes
    .reduce((acc, curr) => acc + curr, 0) / watchMovies.length // Calculate average
  : 0; // Default value if watchMovies is emptyF
  return (
    <div className='p-4 watch-summary-container bg-slate-700'>
      <h2>MOVIES YOU WATCHED</h2>
      <ul className='flex watch-detail-container gap-x-6'>
        <li>{watchMovies.length} movies</li>
        <li>⭐ {avgImdbStar.toFixed(2) || 0}</li>
        <li>🌟 {avgUserStar.toFixed(2) || 0}</li>
        <li>⏲️ {avgTime.toFixed(2) || 0 } min</li>
      </ul>
    </div>
  )
}

export default WatchedSummary