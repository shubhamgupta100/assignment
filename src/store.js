import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cardsReducer } from "./reducers/cardReducer";
import { loadmoreReducer } from "./reducers/loadmoreReducer";

const reducer = combineReducers({
  cards: cardsReducer,
  load: loadmoreReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
