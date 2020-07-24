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