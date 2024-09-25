import { useEffect, useState } from "react";

const KEY = "cbfd577";

export function useMovies(searchQuery) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // callback?.();

    const controller = new AbortController();

    setMovies([]);
    if (searchQuery?.length >= 2) {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          let searchTerm = "";

          if (searchQuery.includes(" ")) {
            if (searchQuery.substring(searchQuery.length - 1) === " ") {
              //Last character is a space
              searchTerm = searchQuery.trim();
            } else {
              //At least two words
              searchTerm = searchQuery.replaceAll(" ", "%20");
            }
          } else {
            //Does not contain a space
            searchTerm = searchQuery;
          }

          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${searchTerm}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovies();
      return () => {
        controller.abort();
      };
    }
  }, [searchQuery]);

  return { movies, isLoading, error };
}
