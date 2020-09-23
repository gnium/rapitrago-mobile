import { Dispatch } from "redux";
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import {
  SET_USER,
  SET_ERRORS,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_UNAUTHENTICATED,
  LOADING_USER,
} from '../types';

export enum AuthActionType {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT_REQUEST = "LOGOUT_REQUEST",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  LOGOUT_FAILURE = "LOGOUT_FAILURE",
  VERIFY_REQUEST = "VERIFY_REQUEST",
  VERIFY_SUCCESS = "VERIFY_SUCCESS",
  SET_GLOBAL_USER = "SET_GLOBAL_USER",
  SET_ERRORS = 'SET_ERRORS',
  LOADING_UI = 'LOADING_UI',
  CLEAR_ERRORS = 'CLEAR_ERRORS',
}

const requestLogin = () =>
  ({
    type: AuthActionType.LOGIN_REQUEST,
  } as const);

const receiveLogin = (user: any) =>
  ({
    type: AuthActionType.LOGIN_SUCCESS,
    user,
  } as const);

const receiveGlobalUser = (user: any) =>
  ({
    type: AuthActionType.SET_GLOBAL_USER,
    user,
  } as const);

const loginError = (error: any) => {
  console.warn("Sign in error: ", error);
  const errorCode = error.code;
  const errorMessage = error.message;
  return {
    type: AuthActionType.LOGIN_FAILURE,
    errorCode,
    errorMessage,
  } as const;
};

const requestLogout = () =>
  ({
    type: AuthActionType.LOGOUT_REQUEST,
  } as const);

const receiveLogout = () =>
  ({
    type: AuthActionType.LOGOUT_SUCCESS,
  } as const);

const logoutError = () =>
  ({
    type: AuthActionType.LOGOUT_FAILURE,
  } as const);

const verifyRequest = () =>
  ({
    type: AuthActionType.VERIFY_REQUEST,
  } as const);

const verifySuccess = () =>
  ({
    type: AuthActionType.VERIFY_SUCCESS,
  } as const);


export const loginUser = (userData: any) => (dispatch: any) => {
  dispatch(requestLogin());
  dispatch({ type: AuthActionType.LOADING_UI });
  axios
    .post('http://localhost:3000/auth/login', userData)
    .then((res) => {
      const token = `Bearer ${res.data.token}`;
      AsyncStorage.setItem('token', `Bearer ${res.data.token}`); //setting token to local storage
      axios.defaults.headers.common['Authorization'] = token; //setting authorize token to header in axios
      // dispatch(getUserData());
      dispatch({ type: AuthActionType.CLEAR_ERRORS });
      console.log('success');
      console.log(AsyncStorage.getItem('token'));
    })
    .catch((err: any) => {
      dispatch(loginError(err));
    });
};

export const loginUserOld = (email: string, password: string) => (dispatch: Dispatch) => {
  dispatch(requestLogin());
  Auth.signIn(email, password)
    // eslint-disable-next-line
    .then((user) => {
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        const newPassword = `demo-${password}`;
        return Auth.completeNewPassword(user, newPassword, {
          email,
        })
          .then(() => {
            dispatch(receiveLogin({ ...user, attributes: user.challengeParam.userAttributes }));
          })
          .catch((error) => {
            dispatch(loginError(error));
          });
      }
      dispatch(receiveLogin(user));
    })
    .catch((error) => {
      dispatch(loginError(error));
    });
};

export const logoutUser = () => (dispatch: Dispatch) => {
  dispatch(requestLogout());
  Auth.signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(() => {
      // Do something with the error if you want!
      dispatch(logoutError());
    });
};

export const verifyAuth = () => (dispatch: Dispatch) => {
  dispatch(verifyRequest());
  return Auth.currentAuthenticatedUser()
    .then((user) => {
      dispatch(receiveLogin(user));
      dispatch(verifySuccess());
    })
    .catch(() => {
      dispatch(receiveLogout());
    });
};

export type AuthAction = ReturnType<
  | typeof requestLogin
  | typeof receiveLogin
  | typeof loginError
  | typeof requestLogout
  | typeof receiveGlobalUser
  | typeof receiveLogout
  | typeof loginUser
  | typeof logoutError
  | typeof logoutUser
  | typeof verifyRequest
  | typeof verifySuccess
  | typeof verifyAuth
>;
