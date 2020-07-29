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

import React from "react";
import {
  FETCH_ENTITY_LIST_REQUEST,
  FETCH_ENTITY_LIST_FAILURE,
  FETCH_ENTITY_LIST_SUCCESS,
  FETCH_CATALOG_LIST_REQUEST,
  FETCH_CATALOG_LIST_FAILURE,
  FETCH_CATALOG_LIST_SUCCESS,
} from "./actionTypes";
// import data from '../data.json';
// import dummyData from '../data.json';

const initState = {
  catalogData: [],
  entityData: {},
  isLoading: false,
  isError: false,
  totalPages: 1,
  totalRes: 0,
};

const reducer = (state = initState, { type, payload }) => {
  ////console.log("reducer payload", payload);
  switch (type) {
    case FETCH_ENTITY_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ENTITY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // data: dummyData,
        entityData: payload["data"],
        totalPages: payload["totalpages"],
        totalRes: payload["totalresults"],
      };
    case FETCH_ENTITY_LIST_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case FETCH_CATALOG_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATALOG_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // data: dummyData,
        catalogData: payload["data"],
        totalPages: payload["totalpages"],
        totalRes: payload["totalresults"],
      };
    case FETCH_CATALOG_LIST_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default reducer;
