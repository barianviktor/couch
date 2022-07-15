import { api, key } from "../../api";
import axios from "axios";

export const getMovieImagesFromId = async (id, setMovieImages, setLoading) => {
  try {
    const result = await axios.get(api + "/movie/" + id + "/images" + key);
    setMovieImages(result.data);
    //  setLoading(false);
  } catch (error) {
    //  setLoading(false);
  }
};
