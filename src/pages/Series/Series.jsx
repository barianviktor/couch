import React, { useState } from "react";
import { img_api } from "../../api";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaImdb, FaPlay } from "react-icons/fa";
import {
  HeaderContainer,
  HeaderBackdropContainer,
  HeaderMainImageContainer,
  HeaderMainContainer,
  HeaderMainSectionContainer,
  HeaderMainImage,
  HeaderMainMovieTitle,
  HeaderMainMovieReleaseDate,
  HeaderMainSectionDiv,
  HeaderMainSectionDataP,
  HeaderMainUserRatingMutato,
  HeaderMainUserRatingUserRating,
  HeaderMainUserRatingSzam,
  HeaderMainTagline,
  HeaderMainSectionOverview,
  CastsContainer,
  CastsMainContainer,
  CastCard,
  CastCardImg,
  CastCardOriginalName,
  CastCharacterName,
  CastMainCastTitle,
  ExternalLinksContainer,
  ExternalLinkIconLink,
  ImageContainerHeader,
  ImageContainerHeaderDiv,
  ImageContainerHeaderTitle,
  ImageContainerHeaderNotTitle,
  ImageContainerBody,
  SimilarContainer,
  DataContainer,
  SeriesCard,
} from "./Series.style";
export default function Series(props) {
  const {
    series,
    seriesCredits,
    seriesEpisodeList,
    seriesExternals,
    seriesImages,
    seriesSimilar,
  } = props;
  const [imageState, setImageState] = useState(0);
  console.log(props);
  const renderGenres = (genres) => {
    let genresReturn = "";
    genres.forEach((genre) => {
      genresReturn += ` ${genre.name} `;
    });
    return genresReturn;
  };
  const generateColorRating = (rating) => {
    let colorCode = "";

    if (rating <= 10 && rating > 8) {
      colorCode = "#2eb0fc";
    } else if (rating <= 8 && rating > 6) {
      colorCode = "#43e22e";
    } else if (rating <= 6 && rating > 3) {
      colorCode = "#f58f3c";
    } else {
      colorCode = "#ff4646";
    }
    return colorCode;
  };
  const renderImages = (id) => {
    switch (id) {
      case 0:
        return (
          <ImageContainerBody>
            {seriesImages.backdrops.map((image) => {
              return (
                <a
                  key={image.id}
                  target="_blank"
                  href={img_api + "/original" + image.file_path}
                >
                  <img src={img_api + "/w500" + image.file_path} />
                </a>
              );
            })}
          </ImageContainerBody>
        );
        break;

      case 1:
        return (
          <ImageContainerBody>
            {seriesImages.posters.map((image) => {
              return (
                <a
                  key={image.id}
                  target="_blank"
                  href={img_api + "/original" + image.file_path}
                >
                  <img src={img_api + "/w500" + image.file_path} />
                </a>
              );
            })}
          </ImageContainerBody>
        );
        break;
      default:
        <div />;
    }
  };
  return (
    <div>
      <HeaderContainer>
        <HeaderMainContainer>
          <HeaderMainImageContainer>
            <HeaderMainImage src={img_api + "/original" + series.poster_path} />
          </HeaderMainImageContainer>
          <HeaderMainSectionContainer>
            <HeaderMainSectionDiv>
              <HeaderMainMovieTitle>{series.name}</HeaderMainMovieTitle>
              <HeaderMainMovieReleaseDate>
                ( {series.first_air_date.split("-")[0]} )
              </HeaderMainMovieReleaseDate>
            </HeaderMainSectionDiv>
            <HeaderMainSectionDiv>
              <HeaderMainSectionDataP>
                {series.release_date}
              </HeaderMainSectionDataP>
              <HeaderMainSectionDataP>
                {renderGenres(series.genres)}
              </HeaderMainSectionDataP>
              <HeaderMainSectionDataP>
                {series.episode_run_time[0]}m
              </HeaderMainSectionDataP>
            </HeaderMainSectionDiv>
            <HeaderMainSectionDiv>
              <HeaderMainUserRatingSzam>
                {series.vote_average * 10}%
              </HeaderMainUserRatingSzam>
              <HeaderMainUserRatingMutato>
                <HeaderMainUserRatingUserRating
                  colorCode={generateColorRating(series.vote_average)}
                  rating={series.vote_average * 10}
                />
              </HeaderMainUserRatingMutato>
            </HeaderMainSectionDiv>
            <HeaderMainSectionDiv>
              <HeaderMainTagline>{series.tagline}</HeaderMainTagline>
            </HeaderMainSectionDiv>
            <HeaderMainSectionDiv>
              <HeaderMainSectionOverview>
                {series.overview}
              </HeaderMainSectionOverview>
            </HeaderMainSectionDiv>
          </HeaderMainSectionContainer>
        </HeaderMainContainer>
        <HeaderBackdropContainer
          path={img_api + "/original" + series.backdrop_path}
        ></HeaderBackdropContainer>
      </HeaderContainer>
      <ExternalLinksContainer>
        {seriesExternals.facebook_id && (
          <ExternalLinkIconLink
            target="_blank"
            href={"https://www.facebook.com/" + seriesExternals.facebook_id}
          >
            <AiFillFacebook />
          </ExternalLinkIconLink>
        )}
        {seriesExternals.instagram_id && (
          <ExternalLinkIconLink
            target="_blank"
            href={"https://www.instagram.com/" + seriesExternals.instagram_id}
          >
            <AiFillInstagram />
          </ExternalLinkIconLink>
        )}
        {seriesExternals.twitter_id && (
          <ExternalLinkIconLink
            target="_blank"
            href={"https://www.facebook.com/" + seriesExternals.twitter_id}
          >
            <AiFillTwitterSquare />
          </ExternalLinkIconLink>
        )}
        {seriesExternals.imdb_id && (
          <ExternalLinkIconLink
            target="_blank"
            href={"https://www.imdb.com/title/" + seriesExternals.imdb_id}
          >
            <FaImdb />
          </ExternalLinkIconLink>
        )}
        {series.homepage && (
          <ExternalLinkIconLink target="_blank" href={series.homepage}>
            <FaPlay />
          </ExternalLinkIconLink>
        )}
      </ExternalLinksContainer>
      <DataContainer>
        {series.seasons.map((season) => {
          if (season.season_number != 0) {
            return (
              <SeriesCard>
                <img src={img_api + "/w500" + season.poster_path} />
                <div>
                  <h1>{season.name}</h1>
                  <h2>
                    {
                      season.air_date && season.air_date.split("-")[0]

                      /*season.air_date.split("-")[0] */
                    }{" "}
                    | {season.episode_count} episode
                  </h2>

                  <p>{season.overview}</p>
                </div>
              </SeriesCard>
            );
          }
        })}
      </DataContainer>
      <DataContainer>
        <ImageContainerHeader>
          <ImageContainerHeaderDiv>
            <ImageContainerHeaderTitle>Media</ImageContainerHeaderTitle>
          </ImageContainerHeaderDiv>
          {seriesImages.backdrops && (
            <ImageContainerHeaderDiv>
              <ImageContainerHeaderNotTitle
                status={imageState == 0 ? true : false}
                onClick={() => setImageState(0)}
              >
                Wallpapers {seriesImages.backdrops.length}
              </ImageContainerHeaderNotTitle>
            </ImageContainerHeaderDiv>
          )}
          {seriesImages.posters && (
            <ImageContainerHeaderDiv>
              <ImageContainerHeaderNotTitle
                status={imageState == 1 ? true : false}
                onClick={() => setImageState(1)}
              >
                Logos {seriesImages.posters.length}
              </ImageContainerHeaderNotTitle>
            </ImageContainerHeaderDiv>
          )}
        </ImageContainerHeader>
        {renderImages(imageState)}
      </DataContainer>
      <DataContainer>
        <ImageContainerHeaderTitle>Main Cast</ImageContainerHeaderTitle>
        <CastsMainContainer>
          {seriesCredits.cast.map((cast) => {
            return (
              <CastCard key={cast.id}>
                {cast.profile_path ? (
                  <CastCardImg src={img_api + "/w300" + cast.profile_path} />
                ) : (
                  <CastCardImg src="https://www.biodry.eu/wp-content/uploads/2016/08/dummy-prod-1.jpg" />
                )}
                <CastCardOriginalName>
                  {cast.original_name}
                </CastCardOriginalName>
                <CastCharacterName>{cast.character}</CastCharacterName>
              </CastCard>
            );
          })}
        </CastsMainContainer>
      </DataContainer>
      <DataContainer>
        <ImageContainerHeaderTitle>Similar</ImageContainerHeaderTitle>
        <SimilarContainer>
          {seriesSimilar.results.map((similar) => {
            return (
              <a key={similar.id} href={similar.id}>
                <img src={img_api + "/w500" + similar.backdrop_path} />
                <div>
                  <p>{similar.name}</p>
                  <p>{Math.round(similar.vote_average * 10)}%</p>
                </div>
              </a>
            );
          })}
        </SimilarContainer>
      </DataContainer>
    </div>
  );
}
