import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {HOME_SCREEN} from '../resources/navigationManager';
import HomeScreen from '../screens/main/HomeScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={HOME_SCREEN}>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
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

export default MainStackNavigation;
