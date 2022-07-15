import styled from "styled-components";

const mainDarkColor = "#131313";

const mainLightColor = "#fcfcfc";

export const SearchPageCont = styled.div`
  width: 100%;
  display: block;
  margin-top: 100px;
`;
export const SearchPageTipusok = styled.div`
  width: 25%;
  display: inline-block;
  float: left;
`;
export const TipusItem = styled.div`
  font-size: 15px;
  width: 95%;
  margin: auto;
  background-color: ${(props) =>
    props.status ? `${mainDarkColor}` : `${mainLightColor}`};
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${(props) =>
      !props.status ? `${mainDarkColor}` : `${mainLightColor}`};
    text-decoration: none;
  }
`;
export const SearchItem = styled.div`
  height: 50px;
  background-color: ${mainDarkColor};
  width: 95%;
  margin: 25px auto;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid ${mainDarkColor};

  input {
    background-color: ${mainLightColor};
    width: 75%;
    padding: 5px 10px;
    color: ${mainDarkColor};
    font-style: italic;
    letter-spacing: 1.5px;
    height: 50px;
    float: left;
    border: none;
    font-size: 14px;
  }
  div {
    width: 25%;
    display: inline-block;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${mainDarkColor};
    float: left;
    a {
      color: ${mainLightColor};
      text-decoration: none;
    }
  }
`;
export const SearchResultsContainer = styled.div`
  display: inline-block;
  width: 75%;
  float: left;
`;

export const SearchResultLeptetoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 75px 0;
`;
export const SearchResultLeptetoContainerItem = styled.a`
  padding: 10px 15px;
  margin: 10px;
  font-weight: 500;
  text-decoration: none;

  background-color: ${(props) =>
    props.status ? `${mainDarkColor}` : `${mainLightColor}`};
  color: ${(props) =>
    !props.status ? `${mainDarkColor}` : `${mainLightColor}`};
  border-radius: 5px;
  border: 1px solid #1d1d1daf;
  &:hover {
    color: white;
    background-color: ${mainDarkColor};
    transition: all 0.2s ease-out;
    box-shadow: 5px 10px 15px #1d1d1d3e;
  }
`;
export const SearchResultItemCard = styled.div`
  width: 95%;
  border-bottom: 1px solid ${mainDarkColor};
  margin: 20px 0;
  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 5px 10px 15px #1d1d1d3e;
  }
  a {
    color: ${mainDarkColor};
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    h1 {
      font-size: 20px;
      display: inline-block;
      margin: 10px 0;
    }
    h2 {
      font-size: 18px;
      display: inline-block;
      margin: 5px;
      padding: 5px;
    }
    p {
      padding: 15px;
    }
  }
  img {
    height: 250px;
  }
  div {
    width: 80%;
  }
`;
