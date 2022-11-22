import React from 'react';
import {View, Text} from 'react-native';

export const toastConfig = {
  successToast: ({text1, props}) => (
    <View
      style={{
        width: '90%',
        backgroundColor: 'white',
        justifyContent: 'center',
        elevation: 3,
        padding: 10,
        borderRadius: 5,
        borderLeftWidth: 3,
        borderLeftColor: '#13B720',
        zIndex: 11,
        minHeight: 70,
      }}>
      <Text style={{color: '#1E1E1E'}}>{text1}</Text>
    </View>
  ),

  errorToast: ({text1, props}) => (
    <View
      style={{
        width: '90%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        padding: 10,
        borderRadius: 5,
        borderLeftWidth: 3,
        borderLeftColor: '#FF3F3F',
        zIndex: 11,
        minHeight: 70,
      }}>
      <Text style={{color: '#1E1E1E'}}>{text1}</Text>
    </View>
  ),

  validationToast: ({text1, props}) => (
    <View
      style={{
        backgroundColor: '#FFCCCC',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 5,
        zIndex: 11,
        padding: 10,
      }}>
      <Text style={{color: '#1E1E1E'}}>{text1}</Text>
    </View>
  ),
  validationSuccessToast: ({text1, props}) => (
    <View
      style={{
        backgroundColor: '#393E46',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 5,
        zIndex: 11,
        padding: 10,
      }}>
      <Text style={{color: 'white'}}>{text1}</Text>
    </View>
  ),
};
