import React from 'react';
import { FETCH_REG_REQUEST, FETCH_REG_FAILURE,REGISTRATION_SUCCESS, FETCH_LOGIN_REQUEST, FETCH_LOGIN_FAILURE, LOGIN_SUCCESS, } from './actionType';

const initState=({
    signupData: [],
    loginData: [],
    isLogin: false
})

const reducer=(state=initState, {type, payload})=>{
    switch(type){
        case FETCH_REG_REQUEST:
        return(
            {
                ...state,
                isLoading: true
            }
        )
        case FETCH_REG_FAILURE:
        return(
            {
                ...state,
                isError: false
            }
        )
        case REGISTRATION_SUCCESS:
        return(
            {
                ...state,
                isLoading: false,
                isRegistration: true,
                signupData: payload 
            }
        )
        case FETCH_LOGIN_REQUEST:
        return(
            {
                ...state
            }
        )
        case FETCH_LOGIN_FAILURE:
        return(
            {
                ...state
            }
        )
        case LOGIN_SUCCESS:
        return(
            {
                ...state,
                loginData: payload
            }
        )
        default:
            return state
    }
}

export default reducer;