
import reducer from './auth/reducer';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// const rootReducer = combineReducers({ authReducer: reducer, searchReducer: searchReducer })

const composeEhnancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(reducer, composeEhnancers(applyMiddleware(thunk)))

 export default store;