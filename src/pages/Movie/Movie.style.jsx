import styled from "styled-components";

const mainDarkColor = "#131313";
const mainLightColor = "#fcfcfc";

export const HeaderContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to right bottom, black 45%, #242424e0);
  position: absolute;
  left: 0;
  top: 0;
  height: 950px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${mainLightColor};
  margin-top: 50px;
`;
export const HeaderBackdropContainer = styled.div`
  opacity: 0.25;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.path});
  background-position: center;

  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeaderMainImage = styled.img`
  width: 85%;
  border-radius: 20px;
  box-shadow: 5px 5px 10px #1a1a1ac7;
`;

export const HeaderMainImageContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderMainSectionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 50px 0;
`;
export const HeaderMainSectionDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 35px;
`;
export const HeaderMainMovieTitle = styled.h1`
  padding: 5px;
  color: ${mainLightColor};
`;
export const HeaderMainMovieReleaseDate = styled.h2`
  letter-spacing: 2px;

  color: ${mainLightColor};
`;
export const HeaderMainContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 85%;
  min-height: 650px;
  position: relative;
  z-index: 3;
  display: flex;
`;
export const HeaderMainSectionDataP = styled.p`
  padding: 5px;
`;
export const HeaderMainUserRatingMutato = styled.div`
  width: 300px;
  height: 10px;
  background-color: ${mainLightColor};
  position: relative;
  transform: skewX(-30deg);
  margin: 15px;
`;
export const HeaderMainUserRatingUserRating = styled.div`
  width: ${(props) => props.rating}%;
  height: 100%;
  background-color: ${(props) => props.colorCode};
`;
export const HeaderMainUserRatingSzam = styled.h3`
  padding: 5px;
`;
export const HeaderMainTagline = styled.h4`
  font-weight: 300;
  letter-spacing: 1.4px;
  font-size: 20px;
  padding: 5px;
  font-style: italic;
`;
export const HeaderMainSectionOverview = styled.p`
  max-width: 700px;
  letter-spacing: 1.5px;
  font-weight: 300;
  font-size: 17px;
  padding: 5px;
`;
export const ExternalLinksContainer = styled.div`
  margin-top: 1020px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const ExternalLinkIconLink = styled.a`
  font-size: 32px;
  margin: 5px 10px;
  color: ${mainDarkColor};
  &:hover {
    color: #7a7a7a;
    transition: all 0.2s ease-out;
  }
`;
export const ImageContainers = styled.div`
  width: 90%;
  margin: 50px auto;
  padding: 50px 0;
  border-bottom: 1px solid ${mainDarkColor};
`;

export const ImageContainerHeader = styled.div`
  width: 100%;
`;

export const ImageContainerBody = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  height: 350px;
  a {
    height: 100%;
  }
  a img {
    height: 100%;
  }
`;

export const ImageContainerHeaderDiv = styled.div`
  display: inline-block;
  margin: 5px 25px;
`;
export const ImageContainerHeaderTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  padding: 10px;
`;
export const ImageContainerHeaderNotTitle = styled.p`
  font-weight: ${(props) => (props.status ? "500" : "400")};

  font-size: 18px;
  padding: 10px;
  cursor: pointer;

  color: ${(props) => (props.status ? "black" : mainDarkColor)};
`;
export const CastsContainer = styled.div`
  position: relative;
  margin: 25px auto;
  width: 90%;
  padding: 50px 0;
  border-bottom: 1px solid darkgray;
`;
export const CastsMainContainer = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
`;
export const CastCard = styled.div`
  margin: 25px;
  box-shadow: 1px 3px 10px #5252524c;

  cursor: default;
`;
export const CastCardImg = styled.img`
  height: 280px;
`;
export const CastCardOriginalName = styled.h3`
  font-size: 20px;
  padding: 5px 0;
  margin: 10px;
  text-align: center;
  margin: auto;
`;
export const CastCharacterName = styled.h4`
  font-size: 16px;
  padding: 5px 0;
  margin: 15px;
  text-align: center;
  color: ${mainDarkColor};
  margin: auto;
`;
export const CastMainCastTitle = styled.h1`
  font-size: 26px;
  padding: 25px;
`;
export const SimilarContainer = styled.div`
  width: 100%;
  margin: auto;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  height: 300px;
  a {
    height: 100%;
    margin: 0 20px;
    text-decoration: none;
    color: ${mainDarkColor};
  }
  a div {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30%;
  }
  a img {
    height: 70%;
    border-radius: 15px;
    transition: all 0.2s ease-out;
    &:hover {
      box-shadow: 5px 5px 10px #1a1a1a83;
    }
  }
`;
