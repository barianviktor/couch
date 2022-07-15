import { api, key } from "../../api";
import axios from "axios";

export const getSeriesImagesFromId = async (
  id,
  setSeriesImages,
  setLoading
) => {
  try {
    const result = await axios.get(api + "/tv/" + id + "/images" + key);
    setSeriesImages(result.data);
    //setLoading(false);
  } catch (error) {
    // setLoading(false);
  }
};
