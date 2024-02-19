import React, { useEffect, useState } from "react";

const MovieDetail = ({ selectedMovie }: { selectedMovie: string }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const apiKey = "4df43510";
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  useEffect(function () {
    async function getMovieDetail() {
     setIsLoading(true);
      const result = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedMovie}`
      );
      const data = await result.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetail();
    

    return (() => {})
    
  }, [selectedMovie]);
  return (
    <div className=" movie-detail-conainer">
        {isLoading  ? (
            <div className="flex items-center justify-center mt-10 loading">
                <h2>Loading...</h2>
            </div>
        ) : (<>
             <header className="flex w-full ">
             <img src={poster} alt={`poster image of ${title}`} className=" w-[150px] object-cover" />
             <div className="p-8 flex-1 bg-gray-700 movie-detail *:py-3">
                 <h2 className="text-xl font-semibold">{title}</h2>
                 <p> {year} {runtime} </p>
                 <p>{genre}</p>
                 <p>⭐ {imdbRating} IMDB rating</p>
             </div>
         </header>
         <article className="p-8 ">
             <p className="mb-6 text-lg">
                 {plot}
             </p>
             Directed by : <em>{director}</em>
         </article>
        </>)}
       
    </div>
  );
};

export default MovieDetail;
