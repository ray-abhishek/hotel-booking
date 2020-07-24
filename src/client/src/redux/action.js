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
