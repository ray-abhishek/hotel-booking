import React from 'react';
import { FETCH_REG_REQUEST, FETCH_REG_FAILURE,REGISTRATION_SUCCESS, FETCH_LOGIN_REQUEST, FETCH_LOGIN_FAILURE, LOGIN_SUCCESS, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE, LOGOUT } from './actionType';
import { loadData, saveData } from '../../components/admin/localStorage';


const initState=({
    signupData: [],
    loginData: loadData("userData") || [],
    isSignup: false,
    isLoading: false,
    isLogin: loadData("toggleLoginData") || false,
    isLogout: false,
})

const reducer=(state=initState, {type, payload})=>{
    console.log("payload", payload)
    console.log('userdata reducer', state)
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
                isSignup: true,
                signupData: payload ,
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
            let userData =  payload
            let toggleLoginData = {isLogin: true}
            saveData("toggleLoginData", toggleLoginData)
            saveData("userData", userData)
        return(
            {
                ...state,
                loginData: payload,
                isLogin: true
            }
        )
        case GOOGLE_LOGIN_SUCCESS:
            let googleData =  payload
            let toggleGoogleData = {isLogin: true}
            saveData("toggleLoginData", toggleGoogleData)
            saveData("userData", googleData)
        return(
            {
                ...state,
                loginData: payload,
                isLogin: true
            }
        )
        case GOOGLE_LOGIN_FAILURE:
        return(
            {
                ...state,
                isError: true,
                isLogin: false
            }
        )
        case LOGOUT:
          let  LogoutData = { payload: '' }
          let toggleLogoutData = {isLogin: false}
            saveData("userData", LogoutData)
            saveData("toggleLoginData", toggleLogoutData)
        // localStorage.clear()
        return(
            {
                
                isLogin: false,
                isLogout: true
            }
        )
        default:
            return state
    }
}

export default reducer;
