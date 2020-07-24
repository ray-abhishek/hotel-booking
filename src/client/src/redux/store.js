/*
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
*/

import reducer from './auth/reducer';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducer';

const rootReducer = combineReducers({ authReducer: reducer, dataReducer: dataReducer })

const composeEhnancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(rootReducer, composeEhnancers(applyMiddleware(thunk)))

 export default store;

