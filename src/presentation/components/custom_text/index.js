import React from 'react';
import {Text} from 'react-native';

const CustomText = ({children, style, numberOfLines}) => {
  return (
    <Text
      allowFontScaling={false}
      style={{
        color: 'black',
        ...style,
      }}
      numberOfLines={numberOfLines}
      ellipsizeMode="clip">
      {children}
    </Text>
  );
};

export default CustomText;
