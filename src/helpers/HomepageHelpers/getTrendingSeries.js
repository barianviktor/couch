import { api, key } from "../../api";
import axios from "axios";

export const getTrendingSeries = async (setTrendingSeries) => {
  try {
    const result = await axios.get(api + "/trending/tv/week" + key);
    //trending/{media_type}/{time_window}
    console.log(result.data.results);
    setTrendingSeries(result.data.results);
  } catch (error) {}
};
