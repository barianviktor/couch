import { api, key } from "../../api";
import axios from "axios";

export const getSeriesCreditsFromId = async (
  id,
  setSeriesCredits,
  setLoading
) => {
  try {
    const result = await axios.get(api + "/tv/" + id + "/credits" + key);
    setSeriesCredits(result.data);
    //setLoading(false);
  } catch (error) {
    // setLoading(false);
  }
};
