import React, { useState, useEffect } from "react";

import { useParams, Navigate } from "react-router-dom";

import { getMovieFromId } from "../helpers/MovieHookHelpers/getMovieFromId";
import { getMovieImagesFromId } from "../helpers/MovieHookHelpers/getMovieImagesFromId";
import { getMovieCreditsFromId } from "../helpers/MovieHookHelpers/getMovieCreditsFromId";
import { getMovieSimilarFromId } from "../helpers/MovieHookHelpers/getMovieSimilarFromId";
import { getMovieExternalsFromId } from "../helpers/MovieHookHelpers/getMovieExternals";

import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
import Movie from "../pages/Movie/Movie";
export default function MovieHook(props) {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(undefined);
  const [movieImages, setMovieImages] = useState(undefined);
  const [movieCredits, setMovieCredits] = useState(undefined);
  const [movieSimilar, setMovieSimilar] = useState(undefined);
  const [movieExternals, setMovieExternals] = useState(undefined);

  let { id } = useParams();

  useEffect(() => {
    if (loading) {
      async function fetchMovieApi() {
        await getMovieFromId(id, setMovie, setLoading);
        await getMovieImagesFromId(id, setMovieImages, setLoading);
        await getMovieCreditsFromId(id, setMovieCredits, setLoading);
        await getMovieSimilarFromId(id, setMovieSimilar, setLoading);
        await getMovieExternalsFromId(id, setMovieExternals, setLoading);
        setLoading(false);
      }
      fetchMovieApi();
    }
  }, []);

  console.log(loading, movie);

  if (loading) {
    return <LoadingComponent />; //<LoadingComponent />;
  } else {
    if (
      !movie &&
      !movieImages &&
      !movieCredits &&
      !movieSimilar &&
      !movieExternals
    )
      return <Navigate to="/" />;
    return (
      <Movie
        movieSimilar={movieSimilar}
        movie={movie}
        movieImages={movieImages}
        movieCredits={movieCredits}
        movieExternals={movieExternals}
      />
    );
  }
}
