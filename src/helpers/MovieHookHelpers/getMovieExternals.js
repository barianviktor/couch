import { api, key } from "../../api";
import axios from "axios";

export const getMovieExternalsFromId = async (
  id,
  setMovieExternals,
  setLoading
) => {
  try {
    const result = await axios.get(
      api + "/movie/" + id + "/external_ids" + key
    );
    setMovieExternals(result.data);
    //   setLoading(false);
  } catch (error) {
    //  setLoading(false);
  }
};
