import React, { useState, useEffect } from "react";

import { Navigate } from "react-router-dom";

import { getTrendingMovies } from "../helpers/HomepageHelpers/getTrendingMovies";
import { getTrendingSeries } from "../helpers/HomepageHelpers/getTrendingSeries";
import Homepage from "../pages/Homepage/Homepage";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
export default function HomepageHook() {
  const [loading, setLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState(undefined);
  const [trendingSeries, setTrendingSeries] = useState(undefined);

  useEffect(() => {
    if (loading) {
      async function fetchMovieApi() {
        await getTrendingSeries(setTrendingSeries);
        await getTrendingMovies(setTrendingMovies);
        setLoading(false);
      }
      fetchMovieApi();
    }
  }, []);

  if (loading) {
    return <LoadingComponent />; //<LoadingComponent />;
  } else {
    if (!trendingMovies && !trendingSeries) return <Navigate to="/" />;
    return (
      <Homepage
        trendingSeries={trendingSeries}
        trendingMovies={trendingMovies}
      />
    );
  }
}
