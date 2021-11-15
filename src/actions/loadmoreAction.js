import {
  LOAD_MORE_REQUEST,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_FAIL,
} from "../actions/actionType";
import axios from "axios";

export const loadMore =
  (keyword = "", pageNum = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: LOAD_MORE_REQUEST });
      const url = `https://api.jikan.moe/v3/search/anime?q=${keyword}&limit=16&page=${pageNum}`;

      const { data } = await axios.get(url);

      dispatch({
        type: LOAD_MORE_SUCCESS,
        payload: data,
        keyword: keyword,
        pageNum: pageNum,
        lastPage: data.last_page,
      });
    } catch (error) {
      dispatch({
        type: LOAD_MORE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
