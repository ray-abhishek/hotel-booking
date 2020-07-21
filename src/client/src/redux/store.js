import { createStore, combineReducers, compose, applyMiddleware } from "redux";

const thunk = (store) => (next) => (action) => {
  typeof action === "function" ? action(store.dispatch) : next(action);
};

const composeEnhanceers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhanceers(applyMiddleware(thunk))
);
