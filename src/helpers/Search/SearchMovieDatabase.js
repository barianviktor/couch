import { api, key } from "../../api";
import axios from "axios";

export const SearchMovieDatabase = async (search, page, setMovies) => {
  try {
    let pageString = "";
    if (page) {
      pageString = "&page=" + page;
    }
    const movie_results = await axios.get(
      api + "/search/movie" + key + "&query=" + search + pageString
    );

    setMovies(movie_results.data);
  } catch (error) {}
};
