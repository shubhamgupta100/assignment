import {
  ALL_CARD_REQUEST,
  ALL_CARD_SUCCESS,
  ALL_CARD_FAIL,
  LOAD_MORE_REQUEST,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_FAIL,
  CLEAR_ERROR,
} from "../actions/actionType";

export const cardsReducer = (
  state = { cards: [], pageNum: "", keyword: "", lastPage: "" },
  action
) => {
  switch (action.type) {
    case ALL_CARD_REQUEST:
      return {
        cards: [],
      };
    case LOAD_MORE_REQUEST:
      return {
        ...state,
      };
    case ALL_CARD_SUCCESS:
      return {
        cards: action.payload.results,
        pageNum: action.pageNum,
        keyword: action.keyword,
        lastPage: action.lastPage,
      };
    case LOAD_MORE_SUCCESS:
      return {
        cards: action.payload.results,
        pageNum: action.pageNum,
        keyword: action.keyword,
        lastPage: action.lastPage,
      };

    case ALL_CARD_FAIL:
      return {
        error: action.payload,
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
