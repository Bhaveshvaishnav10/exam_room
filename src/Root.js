import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './presentation/navigation/MainStackNavigation';
import AuthStackNavigation from './presentation/navigation/AuthStackNavigation';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {authenticateUser} from './data/redux/authSlice';
import secureStorage from './utils/secureStorage';

const Root = ({}) => {
  const isLoggedIn = useSelector(state => state.authUser.isAuthenticated);
  const dispatch = useDispatch();

  console.log('isLogged Ib', isLoggedIn);

  const checkLoggedInOrNot = async () => {
    let user = null;
    user = await secureStorage.getItem('LoggedIn');
    if (user) {
      dispatch(authenticateUser(true));
    }
  };

  useEffect(() => {
    checkLoggedInOrNot();
    const interval = setTimeout(() => {
      SplashScreen.hide();
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
      <StatusBar />
      <NavigationContainer>
        {isLoggedIn ? <MainStackNavigation /> : <AuthStackNavigation />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Root;
