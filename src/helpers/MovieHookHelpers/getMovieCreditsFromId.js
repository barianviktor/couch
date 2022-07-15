import { api, key } from "../../api";
import axios from "axios";

export const getMovieCreditsFromId = async (
  id,
  setMovieCredits,
  setLoading
) => {
  try {
    const result = await axios.get(api + "/movie/" + id + "/credits" + key);
    setMovieCredits(result.data);
    // setLoading(false);
  } catch (error) {
    //  setLoading(false);
  }
};
