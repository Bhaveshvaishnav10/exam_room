import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Root from './src/Root';

import Toast from 'react-native-toast-message';
import {toastConfig} from './src/utils/ToastConfig';
import store from './src/data/redux/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <Provider store={store}>
          <Root />
          <Toast config={toastConfig} />
        </Provider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
