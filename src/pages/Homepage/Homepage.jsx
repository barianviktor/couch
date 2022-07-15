import React, { useState } from "react";
import {
  HomepageMainItemsContainer,
  ScrollableItemsContainer,
  ItemCard,
  VoteSection,
  UserRatingMutato,
  UserRatingMutatoCsik,
  VoteSzazalekDiv,
  ItemCardCimContainer,
  HeaderWelcomeComponent,
  HeaderWelcomeAdatok,
  HeaderWelcomeAdatokSotetito,
  SearchBar,
} from "./Homepage.style";
import { img_api } from "../../api";

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
export default function Homepage(props) {
  const { trendingMovies, trendingSeries } = props;
  const [search, setSearch] = useState("");
  const random = 5;
  console.log(trendingMovies, trendingSeries);
  return (
    <div>
      <HeaderWelcomeComponent>
        <HeaderWelcomeAdatok>
          <h1>Welcome</h1>
          <p>Explore Now</p>
          <SearchBar>
            <input
              placeholder="Kenobi, Spider-Man, Avatar..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div>
              <a href={`/search?query=` + search}>Search</a>
            </div>
          </SearchBar>
        </HeaderWelcomeAdatok>
        <HeaderWelcomeAdatokSotetito />
        <img
          src={img_api + "/original" + trendingMovies[random].backdrop_path}
          alt=""
        />
      </HeaderWelcomeComponent>

      <HomepageMainItemsContainer>
        <h1>Trending Movies</h1>
        <ScrollableItemsContainer>
          {trendingMovies.map((element) => {
            return (
              <ItemCard
                key={element.id}
                href={`/${element.media_type}/${element.id}`}
              >
                <img src={img_api + "/w500" + element.poster_path} />
                <ItemCardCimContainer>
                  <p>{element.title}</p>
                </ItemCardCimContainer>

                <VoteSection>
                  <VoteSzazalekDiv>
                    <p>{element.vote_average * 10}%</p>
                  </VoteSzazalekDiv>
                  <UserRatingMutato>
                    <UserRatingMutatoCsik
                      colorCode={generateColorRating(element.vote_average)}
                      rating={element.vote_average * 10}
                    />
                  </UserRatingMutato>
                </VoteSection>
              </ItemCard>
            );
          })}
        </ScrollableItemsContainer>
      </HomepageMainItemsContainer>

      <HomepageMainItemsContainer>
        <h1>Trending Series</h1>
        <ScrollableItemsContainer>
          {trendingSeries.map((element) => {
            return (
              <ItemCard key={element.id} href={`/series/${element.id}`}>
                <img src={img_api + "/w500" + element.poster_path} />
                <ItemCardCimContainer>
                  <p>{element.name}</p>
                </ItemCardCimContainer>

                <VoteSection>
                  <VoteSzazalekDiv>
                    <p>{element.vote_average * 10}%</p>
                  </VoteSzazalekDiv>
                  <UserRatingMutato>
                    <UserRatingMutatoCsik
                      colorCode={generateColorRating(element.vote_average)}
                      rating={element.vote_average * 10}
                    />
                  </UserRatingMutato>
                </VoteSection>
              </ItemCard>
            );
          })}
        </ScrollableItemsContainer>
      </HomepageMainItemsContainer>
    </div>
  );
}
