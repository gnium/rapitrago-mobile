import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


// Slice

const slice = createSlice({
  name: 'authentication',
  initialState: {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {},
    token: null,
    loading: false,
    errors: null,
  },
  reducers: {
    requestLogin: (state) => {
        state.isLoggingIn = true;
        state.loginError = false;
    },
    clearErrors: (state) => {
        state.loading = false;
        state.errors = null;
    },
    receiveLogin: (state, action) => {
        state.isLoggingIn = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    loginError: (state, action) => {
        state.loading = false;
        state.errors = action.payload;
    }
  },
});

export default slice.reducer

// Actions

const { requestLogin, clearErrors, receiveLogin, loginError } = slice.actions

export const loginUser = (userData: any) =>  async (dispatch: any)  => {
    dispatch(requestLogin());
    axios
      .post('http://localhost:3000/auth/login', userData)
      .then((res) => {
        const token = `Bearer ${res.data.token}`;
        AsyncStorage.setItem('token', `Bearer ${res.data.token}`); //setting token to local storage
        axios.defaults.headers.common['Authorization'] = token; //setting authorize token to header in axios
        dispatch(clearErrors());
        console.log(AsyncStorage.getItem('token'));
        dispatch(receiveLogin(userData));
      })
      .catch((err: any) => {
        dispatch(loginError(err));
      });
};
