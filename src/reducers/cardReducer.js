import {
  ALL_CARD_REQUEST,
  ALL_CARD_SUCCESS,
  ALL_CARD_FAIL,
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
    case ALL_CARD_SUCCESS:
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
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
