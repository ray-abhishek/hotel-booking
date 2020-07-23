
import reducer from './auth/reducer';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducer';

const rootReducer = combineReducers({ authReducer: reducer, dataReducer: dataReducer })

const composeEhnancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(rootReducer, composeEhnancers(applyMiddleware(thunk)))

 export default store;