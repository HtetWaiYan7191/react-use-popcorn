import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import NumOfResults from "./components/NumOfResults";
import MovieLists from "./components/MovieLists";
import WatchedMovieLists from "./components/WatchedMovieLists";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import ErrorMessage from "./components/Error";
import MovieDetail from "./components/MovieDetail";
import { watchMovieProps } from "./types/type";
import { useMovies } from "./useMovies";

const App = () => {
  const apiKey = "4df43510";
  const [watchMovies, setWatchMovies] = useState(function () {
    const data = localStorage.getItem("watchMovies");
    const parseData = JSON.parse(data);
    return parseData ? parseData : [];
  });
  const [query, setQuery] = useState("");
  const {movies, loading, error} = useMovies(query, handleHideWatchedMovie);
  const [hideMovieList, setHideMovieList] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<null | string>(null);
  const [hideWatchedMovieList, setHideWatchedMovieList] = useState(false);

  const handleShowDetail = (id: string) => {
    setShowDetail(true);
    setSelectedMovie(id);
    setHideWatchedMovieList(false);
  };

  const handleRemoveWatchMovie = (id: string) => {
    setWatchMovies((prev) => prev.filter((movie) => movie.imdb !== id));
  };

  const handleResetWatchMovies = () => {
    setWatchMovies([]);
  };

  const handleHideMovieList = () => {
    setHideMovieList(true);
  };

  const handleAddWatchMovie = (movie: watchMovieProps) => {
    setWatchMovies((prev) => [...prev, movie]);
    setShowDetail(false);
  };

  function handleHideWatchedMovie() {
    setHideWatchedMovieList(true);
    setShowDetail(false);
  };

  const handleSearchQuery = async (target: string) => {
    setQuery(target);
  };


  useEffect(() => {
    localStorage.setItem("watchMovies", JSON.stringify(watchMovies));
  }, [watchMovies]);

  return (
    <>
      <Navbar>
        <Logo />
        <SearchBar query={query} handleSearchQuery={handleSearchQuery} />
        <NumOfResults length={movies.length} />
      </Navbar>

      <Main>
        <Box>
          {loading && (
            <h2 className="p-6 text-lg font-semibold text-center loading-container ">
              Loading...
            </h2>
          )}
          {!loading && !error && !hideMovieList && (
            <MovieLists
              movies={movies}
              selectedMovie={selectedMovie}
              handleShowDetail={handleShowDetail}
            />
          )}
          {error && <ErrorMessage errorMessage={error} />}
          <button
            onClick={handleHideMovieList}
            className="absolute w-8 h-8 pb-1 text-lg rounded-full right-2 top-2 bg-slate-900"
          >
            -
          </button>
        </Box>
        <Box>
          {showDetail && !hideWatchedMovieList ? (
            <MovieDetail
              watchMovies={watchMovies}
              onHideMovieDetail={handleHideWatchedMovie}
              selectedMovie={selectedMovie}
              handleAddWatchMovie={handleAddWatchMovie}
            />
          ) : (
            <>
              <WatchedSummary watchMovies={watchMovies} />
              <WatchedMovieLists
                watchMovies={watchMovies}
                handleRemoveWatchMovie={handleRemoveWatchMovie}
              />
            </>
          )}

          <button
            onClick={handleResetWatchMovies}
            className="absolute w-8 h-8 pb-1 text-lg rounded-full right-2 top-2 bg-slate-900"
          >
            -
          </button>
          {showDetail && (
            <button
              onClick={handleHideWatchedMovie}
              className="absolute w-8 h-8 pb-1 text-lg rounded-full left-2 top-2 bg-slate-900"
            >
              &larr;
            </button>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
