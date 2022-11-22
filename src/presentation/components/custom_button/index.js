import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {TEXT_COLOR, WHITE_COLOR} from '../../resources/colorManager';
import CustomText from '../custom_text';

const CustomButton = ({
  title,
  hallow,
  style,
  loader,
  disabled = false,
  btnSize,
  onPress,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={{
        padding: Platform.OS === 'ios' ? 18 : 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: TEXT_COLOR,
        opacity: disabled ? 0.8 : 1,
        borderRadius: 10,
        ...style,
      }}>
      <CustomText
        style={{
          fontSize: 16,
          color: WHITE_COLOR,
          ...textStyles,
        }}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
