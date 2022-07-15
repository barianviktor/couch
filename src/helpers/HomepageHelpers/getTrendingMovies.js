import { api, key } from "../../api";
import axios from "axios";

export const getTrendingMovies = async (setTrendingMovies) => {
  try {
    const result = await axios.get(api + "/trending/movie/week" + key);
    //trending/{media_type}/{time_window}
    console.log(result.data.results);
    setTrendingMovies(result.data.results);
  } catch (error) {}
};
