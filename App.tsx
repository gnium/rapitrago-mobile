/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
//redux stuff
import {Provider} from 'react-redux';
import store from './src/redux/store';
// import { CheckAuthentication } from "./src/utils/CheckAuthentication";

import Stack from './src/Screens';

declare const global: {HermesInternal: null | {}};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
