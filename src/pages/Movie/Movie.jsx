import React, { useState } from "react";
import { img_api } from "../../api";
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
  ExternalLinksContainer,
  ExternalLinkIconLink,
  ImageContainers,
  ImageContainerHeader,
  ImageContainerBody,
  ImageContainerHeaderDiv,
  ImageContainerHeaderTitle,
  ImageContainerHeaderNotTitle,
  CastsContainer,
  CastsMainContainer,
  CastCard,
  CastCardImg,
  CastCardOriginalName,
  CastCharacterName,
  SimilarContainer,
} from "./Movie.style";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaImdb, FaPlay } from "react-icons/fa";
export default function Movie(props) {
  const { movie, movieImages, movieCredits, movieSimilar, movieExternals } =
    props;
  const [imageState, setImageState] = useState(0);

  console.log(movie, movieImages, movieCredits, movieSimilar, movieExternals);

  const calculateTime = (time) => {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    return `${hours}h ${minutes}m`;
  };
  const renderGenres = (genres) => {
    let genresReturn = "";

    for (let i = 0; i < genres.length; i++) {
      genresReturn += ` ${genres[i].name} `;
      if (i < genres.length - 1) {
        genresReturn += `, `;
      }
    }
    return genresReturn;
  };
  const generateColorRating = (rating) => {
    let colorCode = "";

    console.log(rating);
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
            {movieImages.backdrops.map((image) => {
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
            {movieImages.posters.map((image) => {
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
            <HeaderMainImage src={img_api + "/original" + movie.poster_path} />
          </HeaderMainImageContainer>
          <HeaderMainSectionContainer>
            <HeaderMainSectionDiv>
              <HeaderMainMovieTitle>{movie.title}</HeaderMainMovieTitle>
              <HeaderMainMovieReleaseDate>
                ( {movie.release_date.split("-")[0]} )
              </HeaderMainMovieReleaseDate>
            </HeaderMainSectionDiv>
            <HeaderMainSectionDiv>
              <HeaderMainSectionDataP>
                {movie.release_date}
              </HeaderMainSectionDataP>
              <HeaderMainSectionDataP>
                {renderGenres(movie.genres)}
              </HeaderMainSectionDataP>
              <HeaderMainSectionDataP>
                {calculateTime(movie.runtime)}
              </HeaderMainSectionDataP>
            </HeaderMainSectionDiv>
            <HeaderMainSectionDiv>
              <HeaderMainUserRatingSzam>
                {movie.vote_average * 10}%
              </HeaderMainUserRatingSzam>
              <HeaderMainUserRatingMutato>
                <HeaderMainUserRatingUserRating
                  colorCode={generateColorRating(movie.vote_average)}
                  rating={movie.vote_average * 10}
                />
              </HeaderMainUserRatingMutato>
            </HeaderMainSectionDiv>
            <HeaderMainSectionDiv>
              <HeaderMainTagline>{movie.tagline}</HeaderMainTagline>
            </HeaderMainSectionDiv>
            <HeaderMainSectionDiv>
              <HeaderMainSectionOverview>
                {movie.overview}
              </HeaderMainSectionOverview>
            </HeaderMainSectionDiv>
          </HeaderMainSectionContainer>
        </HeaderMainContainer>
        <HeaderBackdropContainer
          path={img_api + "/original" + movie.backdrop_path}
        ></HeaderBackdropContainer>
      </HeaderContainer>
      <ExternalLinksContainer>
        {movieExternals.facebook_id && (
          <ExternalLinkIconLink
            target="_blank"
            href={"https://www.facebook.com/" + movieExternals.facebook_id}
          >
            <AiFillFacebook />
          </ExternalLinkIconLink>
        )}
        {movieExternals.instagram_id && (
          <ExternalLinkIconLink
            target="_blank"
            href={"https://www.instagram.com/" + movieExternals.instagram_id}
          >
            <AiFillInstagram />
          </ExternalLinkIconLink>
        )}
        {movieExternals.twitter_id && (
          <ExternalLinkIconLink
            target="_blank"
            href={"https://www.facebook.com/" + movieExternals.twitter_id}
          >
            <AiFillTwitterSquare />
          </ExternalLinkIconLink>
        )}
        {movieExternals.imdb_id && (
          <ExternalLinkIconLink
            target="_blank"
            href={"https://www.imdb.com/title/" + movieExternals.imdb_id}
          >
            <FaImdb />
          </ExternalLinkIconLink>
        )}
        {movie.homepage && (
          <ExternalLinkIconLink target="_blank" href={movie.homepage}>
            <FaPlay />
          </ExternalLinkIconLink>
        )}
      </ExternalLinksContainer>
      <ImageContainers>
        <ImageContainerHeader>
          <ImageContainerHeaderDiv>
            <ImageContainerHeaderTitle>Media</ImageContainerHeaderTitle>
          </ImageContainerHeaderDiv>
          {movieImages.backdrops && (
            <ImageContainerHeaderDiv>
              <ImageContainerHeaderNotTitle
                status={imageState == 0 ? true : false}
                onClick={() => setImageState(0)}
              >
                Wallpapers {movieImages.backdrops.length}
              </ImageContainerHeaderNotTitle>
            </ImageContainerHeaderDiv>
          )}
          {movieImages.posters && (
            <ImageContainerHeaderDiv>
              <ImageContainerHeaderNotTitle
                status={imageState == 1 ? true : false}
                onClick={() => setImageState(1)}
              >
                Logos {movieImages.posters.length}
              </ImageContainerHeaderNotTitle>
            </ImageContainerHeaderDiv>
          )}
        </ImageContainerHeader>
        {renderImages(imageState)}
      </ImageContainers>
      <CastsContainer>
        <ImageContainerHeaderTitle>Main Cast</ImageContainerHeaderTitle>
        <CastsMainContainer>
          {movieCredits.cast.map((cast) => {
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
      </CastsContainer>
      <CastsContainer>
        <ImageContainerHeaderTitle>Similar</ImageContainerHeaderTitle>
        <SimilarContainer>
          {movieSimilar.results.map((similar) => {
            return (
              <a key={similar.id} href={similar.id}>
                <img src={img_api + "/w500" + similar.backdrop_path} />
                <div>
                  <p>{similar.title}</p>
                  <p>{Math.round(similar.vote_average * 10)}%</p>
                </div>
              </a>
            );
          })}
        </SimilarContainer>
      </CastsContainer>
    </div>
  );
}
