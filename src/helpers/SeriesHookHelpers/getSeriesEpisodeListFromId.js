import { api, key } from "../../api";
import axios from "axios";

export const getSeriesEpisodeListFromId = async (
  id,
  setSeriesEpisodes,
  setLoading
) => {
  try {
    const result = await axios.get(api + "/tv/" + id + "/episode_groups" + key);
    setSeriesEpisodes(result.data);
    //setLoading(false);
  } catch (error) {
    //setLoading(false);
  }
};
