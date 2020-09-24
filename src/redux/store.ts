import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import auth from './reducers/auth';
import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';
const initialState = {};
const middleware = [thunk];
//this is for redux devtool purpose
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const reducer = combineReducers({
  user: userReducer, //user key ma store gareko
  UI: uiReducer,
  auth
});

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  ),
);
export default store;
