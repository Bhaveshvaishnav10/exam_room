import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN_SCREEN, SIGNUP_SCREEN} from '../resources/navigationManager';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const Stack = createNativeStackNavigator();
const AuthStackNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
        <Stack.Screen
          name={LOGIN_SCREEN}
          component={LoginScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            animationEnabled: false,
          }}
        />

        <Stack.Screen
          name={SIGNUP_SCREEN}
          component={SignUpScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigation;
