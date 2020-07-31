import React from "react";
import {
  FETCH_REG_REQUEST,
  FETCH_REG_FAILURE,
  REGISTRATION_SUCCESS,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_FAILURE,
  LOGIN_SUCCESS,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
  LOGOUT,
} from "./actionType";

const initState = {
  signupData: [],
  loginData: [],
  isSignup: false,
  isLoading: false,
  isLogin: false,
  isLogout: false,
};

const reducer = (state = initState, { type, payload }) => {
  // console.log("payload", payload)
  switch (type) {
    case FETCH_REG_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_REG_FAILURE:
      return {
        ...state,
        isError: false,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignup: true,
        signupData: payload,
      };
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
      };
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: payload,
        isLogin: true,
      };
    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        loginData: payload,
        isLogin: true,
      };
    case GOOGLE_LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
        isLogin: false,
      };
    case LOGOUT:
      return {
        isLogin: false,
        isLogout: true,
      };
    default:
      return state;
  }
};

export default reducer;
