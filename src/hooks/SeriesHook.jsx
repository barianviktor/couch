import React, { useState, useEffect } from "react";
import { getSeriesFromId } from "../helpers/SeriesHookHelpers/getSeriesFromId";
import { getSeriesExternalsFromId } from "../helpers/SeriesHookHelpers/getSeriesExternalsFromId";
import { getSeriesEpisodeListFromId } from "../helpers/SeriesHookHelpers/getSeriesEpisodeListFromId";
import { getSeriesImagesFromId } from "../helpers/SeriesHookHelpers/getSeriesImagesFromId";
import { getSeriesSimilarFromId } from "../helpers/SeriesHookHelpers/getSeriesSimilarFromId";
import { getSeriesCreditsFromId } from "../helpers/SeriesHookHelpers/getSeriesCreditsFromId";

import { useParams, Navigate } from "react-router-dom";

import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
import Series from "../pages/Series/Series";
export default function MovieHook(props) {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState(undefined);

  const [seriesCredits, setSeriesCredits] = useState(undefined);
  const [seriesEpisodeList, setSeriesEpisodeList] = useState(undefined);
  const [seriesExternals, setSeriesExternals] = useState(undefined);
  const [seriesImages, setSeriesImages] = useState(undefined);
  const [seriesSimilar, setSeriesSimilar] = useState(undefined);

  let { id } = useParams();

  useEffect(() => {
    if (loading) {
      async function fetchSeriesApi() {
        await getSeriesFromId(id, setSeries, setLoading);
        try {
          await getSeriesExternalsFromId(id, setSeriesExternals, setLoading);
          await getSeriesEpisodeListFromId(
            id,
            setSeriesEpisodeList,
            setLoading
          );
          await getSeriesImagesFromId(id, setSeriesImages, setLoading);
          await getSeriesSimilarFromId(id, setSeriesSimilar, setLoading);
          await getSeriesCreditsFromId(id, setSeriesCredits, setLoading);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      }
      fetchSeriesApi();
    }
  }, []);
  console.log(series);

  if (loading) {
    return <LoadingComponent />; //<LoadingComponent />;
  } else {
    if (
      !series &&
      !seriesCredits &&
      !seriesEpisodeList &&
      !seriesExternals &&
      !seriesImages &&
      !seriesSimilar
    )
      return <Navigate to="/" />;
    console.log(
      series,
      seriesCredits,
      seriesEpisodeList,
      seriesExternals,
      seriesImages,
      seriesSimilar
    );
    return (
      <Series
        series={series}
        seriesCredits={seriesCredits}
        seriesEpisodeList={seriesEpisodeList}
        seriesExternals={seriesExternals}
        seriesImages={seriesImages}
        seriesSimilar={seriesSimilar}
      />
    );
  }
}
