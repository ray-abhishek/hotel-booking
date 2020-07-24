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
import React from 'react';
import axios from 'axios';
import { FETCH_LIST_REQUEST, FETCH_LIST_FAILURE, FETCH_LIST_SUCCESS } from './actionTypes';


export const fetchListRequest=(payload)=>({
    type: FETCH_LIST_REQUEST,
    payload 
})
export const fetchListFailure=(payload)=>({
    type: FETCH_LIST_FAILURE,
    payload 
})
export const fetchListSuccess=(payload)=>({
    type: FETCH_LIST_SUCCESS,
    payload 
})

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
export const fetchRequest = (payload) => (dispatch) => {
  console.log(payload, "payload");
  console.log(`https://2f26ccf36c6e.ngrok.io${payload}`, "url");
  dispatch(fetchListRequest());
  return axios
    .get(`https://2f26ccf36c6e.ngrok.io${payload}`)
    .then((res) => {
      console.log(res.data);
      return res;
    })
    .then((res) => dispatch(fetchListSuccess(res.data)))
    .catch((err) => dispatch(fetchListFailure(err)));
};

