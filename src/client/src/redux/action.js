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
