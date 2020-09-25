import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers, applyMiddleware, compose} from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk';
//import auth from './reducers/auth';
import authentication from './module/authentication';
import merchants from './module/merchants';
import uiReducer from './module/uiReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

// Imports: Redux
const rootReducer = combineReducers({
  UI: uiReducer,
  authentication,
  merchants
});


// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'authentication',
  ],
  // Blacklist (Don't Save Specific Reducers)
};


const persistedReducer = persistReducer(persistConfig, rootReducer)
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(thunk)
})

let persistor = persistStore(store)

// Exports
export {
  store,
  persistor,
};
