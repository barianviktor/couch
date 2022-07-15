import { api, key } from "../../api";
import axios from "axios";

export const SearchSeriesDatabase = async (search, page, setSeries) => {
  try {
    let pageString = "";
    if (page) {
      pageString = "&page=" + page;
    }
    const series_results = await axios.get(
      api + "/search/tv" + key + "&query=" + search + pageString
    );

    setSeries(series_results.data);
  } catch (error) {}
};
