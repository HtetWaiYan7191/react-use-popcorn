import React from "react";
import { watchMovieProps } from "../types/type";

const WatchMovie = ({ movie, handleRemoveWatchMovie }: { movie: watchMovieProps; handleRemoveWatchMovie: (id:string) => void; }) => {
  return (
    <div className="flex items-center justify-between px-8 py-6 border-b">
      <div className="flex items-center watched-movie-container gap-x-5">
        <figure>
          <img src={movie.poster} alt="" className="w-16" />
        </figure>

        <div className="movie-info">
          <h2 className="mb-4 text-lg font-semibold capitalize">
            {movie.title}
          </h2>
          <div className="flex items-center gap-x-5">
            <p>
              <span>⭐</span>
              <span>{movie.imdbRating}</span>
            </p>

            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>

            <p>
              <span>⏳</span>
              <span>{movie.runtime || `N/A`} min</span>
            </p>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={() => handleRemoveWatchMovie(movie.imdb)}>❌</button>
      </div>
    </div>
  );
};

export default WatchMovie;
