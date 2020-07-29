/*

import React from "react";

import {
  FETCH_HOTEL_DATA,
  FETCH_HOTEL_DATA_FAILURE,
  FETCH_HOTEL_DATA__SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const fetchHotelDataRequest = (payload) => ({
  type: FETCH_HOTEL_DATA,
  payload,
});
export const fetchHotelDataFailure = (payload) => ({
  type: FETCH_HOTEL_DATA_FAILURE,
  payload,
});

export const fetchHotelDataSuccess = (payload) => ({
  type: FETCH_HOTEL_DATA__SUCCESS,
  payload,
});

export const fetchRequest = (payload) => (dispatch) => {
  console.log(payload, "payload");
  console.log(`http://localhost:3001${payload}`, "url");
  dispatch(fetchHotelDataRequest());
  return axios
    .get(`http://localhost:3001${payload}`)
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((res) => dispatch(fetchHotelDataSuccess(res)))
    .catch((err) => dispatch(fetchHotelDataFailure(err)));
};

*/
import React from "react";
import axios from "axios";
import {
  FETCH_ENTITY_LIST_REQUEST,
  FETCH_ENTITY_LIST_FAILURE,
  FETCH_ENTITY_LIST_SUCCESS,
  FETCH_CATALOG_LIST_REQUEST,
  FETCH_CATALOG_LIST_FAILURE,
  FETCH_CATALOG_LIST_SUCCESS,
} from "./actionTypes";

export const fetchEntityListRequest = (payload) => ({
  type: FETCH_ENTITY_LIST_REQUEST,
  payload,
});
export const fetchEntityListFailure = (payload) => ({
  type: FETCH_ENTITY_LIST_FAILURE,
  payload,
});
export const fetchEntityListSuccess = (payload) => ({
  type: FETCH_ENTITY_LIST_SUCCESS,
  payload,
});

export const fetchCatalogListRequest = (payload) => ({
  type: FETCH_CATALOG_LIST_REQUEST,
  payload,
});
export const fetchCatalogListFailure = (payload) => ({
  type: FETCH_CATALOG_LIST_FAILURE,
  payload,
});
export const fetchCatalogListSuccess = (payload) => ({
  type: FETCH_CATALOG_LIST_SUCCESS,
  payload,
});

// Response (List of items)
/*
export const fetchUserData=query=>dispatch=>{
    dispatch(fetchListRequest())
    return (
        axios.get("https://d49672f80328.ngrok.io/search"
        // +query.location+"/?",{
        //     params:  {
        //             arrivalDate: query.arrivalData,
        //             departureDate: query.departureDate,
        //             sleeps: query.sleeps
        //             }
        // }
        )
        .then((res)=>{
            console.log(res.data)
            return dispatch(fetchListSuccess(res.data))
        })
        .catch((error)=>{
            console.log(error)
        })
    )
}
*/
export const fetchCatalogRequest = (payload) => (dispatch) => {
  console.log(payload, "payload");
  console.log(`https://7d6daa289cc2.ngrok.io${payload}`, "url");
  dispatch(fetchCatalogListRequest());
  return axios
    .get(`https://c339083f82fb.ngrok.io${payload}`)
    .then((res) => {
      console.log(res.data);
      return res;
    })
    .then((res) => dispatch(fetchCatalogListSuccess(res.data)))
    .catch((err) => dispatch(fetchCatalogListFailure(err)));
};

export const fetchEntityRequest = (payload) => (dispatch) => {
  console.log(payload, "payload");
  console.log(`https://c339083f82fb.ngrok.io${payload}`, "url");
  dispatch(fetchEntityListRequest());
  return axios
    .get(`https://c339083f82fb.ngrok.io${payload}`)
    .then((res) => {
      console.log(res.data);
      return res;
    })
    .then((res) => dispatch(fetchEntityListSuccess(res.data)))
    .catch((err) => dispatch(fetchEntityListFailure(err)));
};
