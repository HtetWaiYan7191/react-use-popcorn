import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { watchMovieProps } from "../types/type";
import Star from "./svgIcons/Star";

const MovieDetail = ({
  selectedMovie,
  handleAddWatchMovie,
  watchMovies,
  onHideMovieDetail
}: {
  selectedMovie: string;
  onHideMovieDetail: () => void;
  handleAddWatchMovie: (movie: watchMovieProps) => void;
  watchMovies: watchMovieProps[];
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const oldRating = watchMovies?.filter(
    (movie) => movie?.imdb === selectedMovie
  )[0]?.userRating;

  const [userRating, setUserRating] = useState<number>(0);
  const isWatched = watchMovies
    .map((movie) => movie.imdb)
    .includes(selectedMovie);

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

  const onHandleRating = (rating: number) => {
    setUserRating(rating);
  };

  useEffect(() => {
    function callback(e) {
      if(e.code === 'Escape') {
        onHideMovieDetail()
        console.log('closing')
      }
    }
    document.addEventListener('keydown', callback)

    return function(){
      document.removeEventListener('keydown', callback)
    }
  },[onHideMovieDetail])

  useEffect(
    function () {
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

      return () => {};
    },
    [selectedMovie]
  );

  useEffect(() => {
    document.title = `Movie | ${title}`;

    return (() => document.title = "usePopcorn");
  }, [title]);
  
  return (
    <div className=" movie-detail-conainer">
      {isLoading ? (
        <div className="flex items-center justify-center mt-10 loading">
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <header className="flex w-full ">
            <img
              src={poster}
              alt={`poster image of ${title}`}
              className=" w-[150px] object-cover"
            />
            <div className="p-8 flex-1 bg-gray-700 movie-detail *:py-3">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p>
                {" "}
                {released} {runtime}{" "}
              </p>
              <p>{genre}</p>
              <p>⭐ {imdbRating} IMDB rating</p>
            </div>
          </header>

          <div className="flex flex-col gap-y-6 items-center justify-center p-4 mx-auto mt-6 overflow-hidden w-[400px] star-rating-container bg-slate-700 rounded-xl">
            {!isWatched ? (
              <>
                <StarRating maxRating={10} onHandleRating={onHandleRating} />
                <button
                  onClick={() =>
                    handleAddWatchMovie({
                      imdb: selectedMovie,
                      poster,
                      userRating,
                      title,
                      imdbRating: Number(imdbRating),
                      runtime: Number(runtime.split(" ").at(0)),
                    })
                  }
                  className="px-20 py-2 bg-purple-700 rounded-full "
                >
                  <span className="text-lg">+</span> Add To List
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  {Array.from({ length: 10 }, (_, i) => (
                    <Star
                      key={i}
                      color={"yellow"}
                      size={32}
                      fullStar={
                        oldRating ? oldRating >= i + 1 : oldRating >= i + 1
                      }
                    />
                  ))}
                </div>

                <p>You already rated {oldRating} ⭐ this movie 😁</p>
              </>
            )}
          </div>

          <article className="p-8 ">
            <p className="mb-6 text-lg">{plot}</p>
            Directed by : <em>{director}</em>
          </article>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
