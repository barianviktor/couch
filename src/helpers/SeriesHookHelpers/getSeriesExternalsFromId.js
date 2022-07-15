import { api, key } from "../../api";
import axios from "axios";

export const getSeriesExternalsFromId = async (
  id,
  setSeriesExternals,
  setLoading
) => {
  try {
    const result = await axios.get(api + "/tv/" + id + "/external_ids" + key);
    setSeriesExternals(result.data);
    //setLoading(false);
  } catch (error) {
    //setLoading(false);
  }
};
