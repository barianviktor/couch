import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { AppWrapper, Main } from "./App.style";
import MovieHook from "./hooks/MovieHook";
import SeriesHook from "./hooks/SeriesHook";
import HomepageHook from "./hooks/HomepageHook";
import SearchPageHook from "./hooks/SearchPageHook";
import SearchPage from "./pages/SearchPage/SearchPage";
import "./App.css";

export default function App() {
  return (
    <Main>
      <Navigation />
      <div className="asd">asd</div>
      <AppWrapper>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomepageHook />} />
            <Route path="/movie/:id" element={<MovieHook />} />
            <Route path="/series/:id" element={<SeriesHook />} />

            <Route path="/search">
              <Route path=":type" element={<SearchPageHook />} />
              <Route path="" element={<SearchPageHook />} />
            </Route>
          </Routes>
        </Router>
      </AppWrapper>
      <Footer />
    </Main>
  );
}
