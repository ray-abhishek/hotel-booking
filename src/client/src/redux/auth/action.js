import React from 'react';
import { FETCH_REG_REQUEST, FETCH_REG_FAILURE,REGISTRATION_SUCCESS, FETCH_LOGIN_REQUEST, FETCH_LOGIN_FAILURE, LOGIN_SUCCESS, } from './actionType';
import axios from 'axios';

export const fetchRegistrationRequest=(payload)=>({
    type: FETCH_REG_REQUEST,
    payload
})
export const fetchRegFailure=(payload)=>({
    type: FETCH_REG_FAILURE,
    payload
})

export const registrationSuccess=(payload)=>({
    type: REGISTRATION_SUCCESS,
    payload
})

export const loginRequest=(payload)=>({
    type: FETCH_LOGIN_REQUEST,
    payload
})
export const loginFailure=(payload)=>({
    type: FETCH_LOGIN_FAILURE,
    payload
})
export const loginSuccess=(payload)=>({
    type: LOGIN_SUCCESS,
    payload
})



export const userRegistration=query=>dispatch=>{
    dispatch(fetchRegistrationRequest())
    return(
        axios.post("http://localhost:8080/auth/register",{
            name: query.name,
            email: query.email,
            password: query.password,
            username: query.username,
            mobile: query.mobile,
            description: query.description
    }).then(res=>{

        console.log(res)
        return dispatch(registrationSuccess(res))
    }
        )
        .catch((error)=>{
            console.log(error)
        }
    )
    )
}

export const userLogin=query=>dispatch=>{
    dispatch(loginRequest())
    return (
        axios.post("http://localhost:8080/auth/login",{      
            username: query.username,         
            password: query.password,
    }).then(loginRes=>{
        console.log(loginRes)
        return dispatch(loginSuccess(loginRes))
    }
        )
        .catch((error)=>{
            console.log(error)
        })
    
    )
}
 