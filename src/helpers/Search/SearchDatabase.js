import { api, key } from "../../api";
import axios from "axios";

export const searchDatabase = async (search, setSeries, setMovies) => {
  try {
    const searchData = [];

    const sori_results = await axios.get(
      api + "/search/tv" + key + "&query=" + search
    );
    const movie_results = await axios.get(
      api + "/search/movie" + key + "&query=" + search
    );

    setSeries(sori_results);
    setMovies(movie_results);
  } catch (error) {}
};
