/*
import React from "react";
import {
  FETCH_HOTEL_DATA,
  FETCH_HOTEL_DATA_FAILURE,
  FETCH_HOTEL_DATA__SUCCESS,
} from "./actionTypes";
const initState = {
  data: [],
  isLogin: false,
  isError: false,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_HOTEL_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_HOTEL_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case FETCH_HOTEL_DATA__SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    default:
      return state;
  }
};

export default reducer;
*/

import React from 'react';
import { FETCH_LIST_REQUEST, FETCH_LIST_FAILURE, FETCH_LIST_SUCCESS } from './actionTypes';
// import data from '../data.json';

const initState={
    data: [],
    isLoading: false,
    isError: false,
}

const reducer =(state=initState, {type, payload})=>{
    console.log("reducer payload",payload)
    switch(type){
        case FETCH_LIST_REQUEST:
            return (
                {
                    ...state,
                    isLoading: true
                }
            )
        case FETCH_LIST_SUCCESS:
            return (
                {
                    ...state,
                    isLoading: false,
                    data: payload["data"]
                }
            )
        case FETCH_LIST_FAILURE:
            return (
                {
                    ...state,
                    isError: true
                }
            )
        default:
        return state
    }
} 

export default reducer;

