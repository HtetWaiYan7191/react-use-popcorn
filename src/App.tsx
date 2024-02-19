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

const App = () => {
  const apiKey = "4df43510";
  const [movies, setMovies] = useState([]);
  const [watchMovies, setWatchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
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
    setWatchMovies((prev) => prev.filter(movie => movie.imdb !== id))
  }

  const handleResetWatchMovies = () => {
    setWatchMovies([]);
  }

  const handleHideMovieList = () => {
    setHideMovieList(true);
  };

  const handleAddWatchMovie = (movie:watchMovieProps) => {
    setWatchMovies((prev) => [...prev, movie])
    setShowDetail(false);
  }

  const handleHideWatchedMovie = () => {
    setHideWatchedMovieList(true);
    setShowDetail(false);
  };

  const handleSearchQuery = async (target: string) => {
    setQuery(target);
  };

  const fetchSearchMovies = async (controller) => {
    try {
      setError("")
      setLoading(true);
      if (query.length > 3) {
        const result = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`, {signal: controller.signal}
        );
        if (!result.ok) {
          throw new Error(" Cannot fetch the movies ");
        }

        const data = await result.json();
        if (data.Response == "False") {
          throw new Error(" Movie Not Found");
        }
        setMovies(data.Search);
        setError("");
      }
    } catch (err) {
      if(err.name !== "AbortError")
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    handleHideWatchedMovie();
    fetchSearchMovies(controller);

    return(() => {controller.abort})
  }, [query]);

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
            <MovieDetail watchMovies={watchMovies} onHideMovieDetail={handleHideWatchedMovie} selectedMovie={selectedMovie} handleAddWatchMovie={handleAddWatchMovie} />
          ) : (
            <>
              <WatchedSummary watchMovies={watchMovies} />
              <WatchedMovieLists watchMovies={watchMovies}  handleRemoveWatchMovie={handleRemoveWatchMovie} />
            </>
          )}

          <button onClick={handleResetWatchMovies} className="absolute w-8 h-8 pb-1 text-lg rounded-full right-2 top-2 bg-slate-900">
            -
          </button>
          {showDetail && <button
            onClick={handleHideWatchedMovie}
            className="absolute w-8 h-8 pb-1 text-lg rounded-full left-2 top-2 bg-slate-900"
          >
            &larr;
          </button> }
        </Box>
      </Main>
    </>
  );
};

export default App;
