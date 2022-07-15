import { api, key } from "../../api";
import axios from "axios";

export const getSeriesFromId = async (id, setSeries, setLoading) => {
  console.log("firing");
  try {
    const result = await axios.get(api + "/tv/" + id + key);
    setSeries(result.data);
    //setLoading(false);
  } catch (error) {
    // setLoading(false);
  }
};
