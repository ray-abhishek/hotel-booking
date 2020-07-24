import React from 'react';
import { FETCH_REG_REQUEST, FETCH_REG_FAILURE,REGISTRATION_SUCCESS, FETCH_LOGIN_REQUEST, FETCH_LOGIN_FAILURE, LOGIN_SUCCESS, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE, LOGOUT } from './actionType';
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
export const googleLoginRequest=(payload)=>({
    type: GOOGLE_LOGIN_REQUEST,
    payload
})
export const googleLoginSuccess=(payload)=>({
    type: GOOGLE_LOGIN_SUCCESS,
    payload
})
export const googleLoginfailure=(payload)=>({
    type: GOOGLE_LOGIN_FAILURE,
    payload
})
export const logout=(payload)=>({
    type: LOGOUT,
    payload
})



export const userRegistration=query=>dispatch=>{
    dispatch(fetchRegistrationRequest())
    return(
        axios.post("https://2f26ccf36c6e.ngrok.io/signup",{
            email: query.email,
            name: query.name,
            password: query.password
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
        axios.post("https://2f26ccf36c6e.ngrok.io/login",{      
            email: query.email,         
            password: query.password
    }).then(loginRes=>{
        console.log("login data",loginRes)
        return dispatch(loginSuccess(loginRes))
    }
        )
        .catch((error)=>{
            console.log(error)
        })
    
    )
}

export const googleLogin=query=>dispatch=>{
    dispatch(googleLoginRequest())
    console.log("axios", query)
    return (
        axios.post("https://2f26ccf36c6e.ngrok.io/ssologin",{      
            
                email: query.email,
                name: query.name,
                googleId : query.googleId,
                imageUrl : query.imageUrl            
    }).then(loginRes=>{
        console.log("Google login data",loginRes)
        return dispatch(googleLoginSuccess(loginRes))
    }
        )
        .catch((error)=>{
            console.log(error)
        })
    
    )
}


export const logoutUser=query=>dispatch=>{
    dispatch(logout())
    return (
        axios.get("https://d49672f80328.ngrok.io/logout")
        .then(logoutRes=>{
        console.log("logoutRes",logoutRes)
        return dispatch(logout(logoutRes))
    }
        )
        .catch((error)=>{
            console.log(error)
        })
    
    )
}
 