import { useState, useEffect } from "react";

export function useMovies(query:string) {
    const apiKey = "4df43510";

    const [movies, setMovies] = useState([]);
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState("");

    const fetchSearchMovies = async (controller) => {
        try {
          setError("");
          setLoading(true);
          if (query.length > 3) {
            const result = await fetch(
              `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
              { signal: controller.signal }
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
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      
    useEffect(() => {
        // callback?.();
        const controller = new AbortController();
        // handleHideWatchedMovie();
        fetchSearchMovies(controller);
    
        return () => {
          controller.abort;
        };
      }, [query]);
      return {movies, loading, error}
    
}