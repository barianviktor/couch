import React, { useState, useEffect } from "react";
import { img_api } from "../../api";

import {
  SearchPageCont,
  SearchPageTipusok,
  SearchResultsContainer,
  SearchResultItemCard,
  SearchResultLeptetoContainer,
  SearchResultLeptetoContainerItem,
  SearchItem,
  TipusItem,
} from "./SearchPage.style";
export default function SearchPage(props) {
  const [query, setQuery] = useState(props.query);
  const [currentPage, setCurrentPage] = useState(props.page);
  useEffect(() => {}, []);
  console.log(props);
  let { type, movies, series } = props;
  const renderLinkek = (type, items, currentPage) => {
    currentPage = parseInt(currentPage);
    const linkek = [];
    if (items.total_pages > 1) {
      if (currentPage > 1)
        linkek.push(
          <SearchResultLeptetoContainerItem
            href={`/search/${type}/?query=${query}&page=${currentPage - 1}`}
          >
            Previous
          </SearchResultLeptetoContainerItem>
        );
      linkek.push(
        <SearchResultLeptetoContainerItem
          status={true}
          href={`/search/${type}/?query=${query}&page=${currentPage}`}
        >
          {currentPage}
        </SearchResultLeptetoContainerItem>
      );
      let i = 1;
      while (i < 5 && currentPage + i <= items.total_pages) {
        linkek.push(
          <SearchResultLeptetoContainerItem
            href={`/search/${type}/?query=${query}&page=${currentPage + i}`}
          >
            {currentPage + i}
          </SearchResultLeptetoContainerItem>
        );
        i++;
      }
      if (currentPage < items.total_pages)
        linkek.push(
          <SearchResultLeptetoContainerItem
            href={`/search/${type}/?query=${query}&page=${currentPage + 1}`}
          >
            Next
          </SearchResultLeptetoContainerItem>
        );
      return (
        <SearchResultLeptetoContainer>{linkek}</SearchResultLeptetoContainer>
      );
    }
  };
  const renderSearchPageItems = (type, items, currentPage) => {
    return (
      <SearchResultsContainer>
        {items.results.map((item) => {
          return (
            <SearchResultItemCard key={item.id}>
              <a href={`/${type}/${item.id}`}>
                <img src={img_api + "/w500" + item.poster_path} />
                <div>
                  <div>
                    {item.name && <h1>{item.name}</h1>}
                    {item.title && <h1>{item.title}</h1>}
                    <h2>{Math.round(item.vote_average * 10)}%</h2>
                  </div>
                  <p>{item.overview}</p>
                </div>
              </a>
            </SearchResultItemCard>
          );
        })}
      </SearchResultsContainer>
    );
  };
  console.log(type == "movie");
  return (
    <SearchPageCont>
      <SearchPageTipusok>
        <SearchItem>
          <input
            placeholder="Kenobi, Spider-Man, Avatar..."
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div>
            <a href={`/search/${type}?query=${query}`}>Search</a>
          </div>
        </SearchItem>
        <TipusItem status={type == "movie" ? true : false}>
          <a href={`/search/movie?query=${query}`}>
            Movies ({movies.total_results})
          </a>
        </TipusItem>
        <TipusItem status={type == "series" ? true : false}>
          <a href={`/search/series?query=${query}`}>
            Series ({series.total_results})
          </a>
        </TipusItem>
      </SearchPageTipusok>
      {type == "movie" && renderSearchPageItems(type, movies, currentPage)}
      {type == "series" && renderSearchPageItems(type, series, currentPage)}
      {renderLinkek(type, movies, currentPage)}
    </SearchPageCont>
  );
}
