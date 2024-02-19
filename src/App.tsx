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
import { debounce } from "lodash"; // Import debounce function from lodash library
import MovieDetail from "./components/MovieDetail";

const App = () => {
  const apiKey = "4df43510";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [hideMovieList, setHideMovieList] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<null | string>(null);
  const [hideWatchedMovieList, setHideWatchedMovieList] = useState(false);
  
  const handleShowDetail = (id:string) => {
    setShowDetail(true);
    setSelectedMovie(id);
    setHideWatchedMovieList(false);
  };

  const handleHideMovieList = () => {
    setHideMovieList(true);
  };

  const handleHideWatchedMovie = () => {
    setHideWatchedMovieList(true);
  }

  const handleSearchQuery = async (target: string) => {
    setQuery(target);
  };

  const fetchSearchMovies = async () => {
    try {
      setLoading(true);
      if (query.length > 3) {
        const result = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
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
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchMovies();

    return () => console.log("clean up function");
  }, [query]);

  return (
    <>
      <Navbar>
        <Logo />
        <SearchBar query={query} handleSearchQuery={handleSearchQuery} />
        <NumOfResults />
      </Navbar>

      <Main>
        <Box>
          {loading && (
            <h2 className="p-6 text-lg font-semibold text-center loading-container ">
              Loading...
            </h2>
          )}
          {!loading && !error && !hideMovieList && (
            <MovieLists movies={movies} selectedMovie={selectedMovie} handleShowDetail={handleShowDetail} />
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
          {showDetail && !hideWatchedMovieList  ?  (
            <MovieDetail selectedMovie={selectedMovie} />
          ) : (
            <>
              <WatchedSummary />
              <WatchedMovieLists />
            </>
          )}

          <button onClick={handleHideWatchedMovie} className="absolute w-8 h-8 pb-1 text-lg rounded-full right-2 top-2 bg-slate-900">
            -
          </button>
        </Box>
      </Main>
    </>
  );
};

export default App;
