import { api, key } from "../../api";
import axios from "axios";

export const getMovieSimilarFromId = async (
  id,
  setMovieSimilar,
  setLoading
) => {
  try {
    const result = await axios.get(api + "/movie/" + id + "/similar" + key);
    setMovieSimilar(result.data);
    //  setLoading(false);
  } catch (error) {
    //  setLoading(false);
  }
};
