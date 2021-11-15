import {
  ALL_CARD_REQUEST,
  ALL_CARD_SUCCESS,
  ALL_CARD_FAIL,
  CLEAR_ERROR,
} from "../actions/actionType";
import axios from "axios";

export const getAllCard =
  (keyword = "", pageNum = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_CARD_REQUEST });
      const url = `https://api.jikan.moe/v3/search/anime?q=${keyword}&limit=16&page=${pageNum}`;

      const { data } = await axios.get(url);

      dispatch({
        type: ALL_CARD_SUCCESS,
        payload: data,
        keyword: keyword,
        pageNum: pageNum,
        lastPage: data.last_page,
      });
    } catch (error) {
      dispatch({
        type: ALL_CARD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
