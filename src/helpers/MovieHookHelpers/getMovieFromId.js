import { api, key } from "../../api";
import axios from "axios";

export const getMovieFromId = async (id, setMovie, setLoading) => {
  try {
    const result = await axios.get(api + "/movie/" + id + key);
    setMovie(result.data);
    //  setLoading(false);
  } catch (error) {
    // setLoading(false);
  }
};
