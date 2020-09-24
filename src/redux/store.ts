import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';
const initialState = {};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;


// Imports: Redux
const rootReducer = combineReducers({
  user: userReducer, //user key ma store gareko
  UI: uiReducer,
  auth
});


// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'auth',
  ],
  // Blacklist (Don't Save Specific Reducers)
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)
const enhancer = composeEnhancers(applyMiddleware(thunk));

// store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(...middlewares)));
// Redux: Store
const store = createStore(
  persistedReducer,
  undefined,
  enhancer
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};




///////

