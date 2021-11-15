import {
  LOAD_MORE_REQUEST,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_FAIL,
  CLEAR_ERROR,
} from "../actions/actionType";

export const loadmoreReducer = (
  state = { cards: [], pageNum: "", keyword: "", lastPage: "" },
  action
) => {
  switch (action.type) {
    case LOAD_MORE_REQUEST:
      return {
        cards: [],
      };
    case LOAD_MORE_SUCCESS:
      return {
        ...state,
        cards: action.payload.results,
        pageNum: action.pageNum,
        keyword: action.keyword,
        lastPage: action.lastPage,
      };

    case LOAD_MORE_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
