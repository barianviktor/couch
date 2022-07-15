import React, { useState, useEffect } from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
import queryString from "query-string";
import { searchDatabase } from "../helpers/Search/SearchDatabase";
import { SearchSeriesDatabase } from "../helpers/Search/SearchSeriesDatabase";
import { SearchMovieDatabase } from "../helpers/Search/SearchMovieDatabase";
import SearchPage from "../pages/SearchPage/SearchPage";
export default function SearchPageHook(props) {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState(undefined);
  const [movies, setMovies] = useState(undefined);
  let { type } = useParams();
  const location = useLocation();
  let { page, query } = queryString.parse(location.search);
  useEffect(() => {
    if (loading) {
      async function fetchMovieApi() {
        await SearchMovieDatabase(query, page, setMovies);
        await SearchSeriesDatabase(query, page, setSeries);
        setLoading(false);
      }
      fetchMovieApi();
    }
  }, []);

  if (loading) {
    return <LoadingComponent />;
  } else {
    if (!series || !movies) return <Navigate to="/" />;
    if (type != "movie" && type != "series") type = "movie";
    if (!page) page = 1;
    return (
      <SearchPage
        query={query}
        page={page}
        type={type}
        movies={movies}
        series={series}
      />
    );
  }
}
