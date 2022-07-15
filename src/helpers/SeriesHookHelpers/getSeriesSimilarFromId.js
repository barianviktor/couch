import { api, key } from "../../api";
import axios from "axios";

export const getSeriesSimilarFromId = async (
  id,
  setSeriesSimilar,
  setLoading
) => {
  try {
    const result = await axios.get(api + "/tv/" + id + "/similar" + key);
    setSeriesSimilar(result.data);
    //setLoading(false);
  } catch (error) {
    // setLoading(false);
  }
};
