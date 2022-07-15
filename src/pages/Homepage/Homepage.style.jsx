import styled from "styled-components";

const mainDarkColor = "#131313";
const mainLightColor = "#fcfcfc";

export const HomepageMainItemsContainer = styled.div`
  position: relative;
  margin: 25px auto;
  width: 90%;
  padding: 50px 0;
  border-bottom: 1px solid darkgray;
  h1 {
    font-size: 22px;
  }
`;

export const ScrollableItemsContainer = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
`;
export const ItemCard = styled.a`
  background-color: ${mainDarkColor};

  margin: 25px 15px;
  transition: all 0.2s ease-out;
  img {
    height: 350px;
  }
  :hover {
    box-shadow: 2px 5px 10px #1b1b1bc1;
    color: ${mainLightColor};
    text-decoration: none;
  }
  color: ${mainLightColor};
  text-decoration: none;
`;
export const VoteSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 100%;
`;

export const VoteSzazalekDiv = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  p {
    margin: 0;
    padding: 0;
  }
`;

export const UserRatingMutato = styled.div`
  width: 70%;
  height: 10px;
  background-color: ${mainLightColor};
  margin-right: 5%;
  position: relative;
  transform: skewX(-30deg);
`;
export const UserRatingMutatoCsik = styled.div`
  width: ${(props) => props.rating}%;
  height: 100%;
  background-color: ${(props) => props.colorCode};
`;

export const ItemCardCimContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  p {
    margin: 0 5px;
    padding: 0;
    font-size: 15px;
    text-align: center;
  }
  width: 100%;
`;
export const HeaderWelcomeComponent = styled.div`
  width: 100%;
  overflow: hidden;
  height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;
export const HeaderWelcomeAdatok = styled.div`
  width: 100%;
  position: absolute;
  padding: 10px 10%;
  z-index: 5;
  color: ${mainLightColor};
  h1 {
    font-size: 32px;
    letter-spacing: 2px;
    padding: 10px 0;
  }
  p {
    font-style: italic;
    letter-spacing: 2px;
    padding: 5px 10px;
  }
`;

export const HeaderWelcomeAdatokSotetito = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
  background-color: #37515860;
  z-index: 2;
`;
export const SearchBar = styled.div`
  width: 100%;
  background-color: white;
  overflow: hidden;
  border-radius: 15px;
  height: 45px;
  box-shadow: 5px 10px 15px #252525cf;

  input {
    width: 80%;
    padding: 5px 10px;
    letter-spacing: 1px;
    font-size: 16px;
    height: 100%;
    color: #222222;
    font-style: italic;
  }
  div {
    width: 20%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${mainDarkColor};
    height: 100%;

    a {
      color: ${mainLightColor};
      text-decoration: none;
    }
  }
`;
