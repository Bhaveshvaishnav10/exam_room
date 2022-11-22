import React, {useEffect, useRef, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Animated, Easing, Image, Platform, TextInput, View} from 'react-native';
import {validate} from './Validator';
import {BLACK_COLOR} from '../../resources/colorManager';

const CustomInput = ({
  innerRef,
  value,
  onChangeText,
  inputStyles,
  iconStyles,
  blurIconSrc,
  type,
  placeholder,
  placeholderTextColor,
  containerStyle,
  secureTextEntry,
  autoFocus,
  isIconAvailable = false,
  iconSrc = '',
  keyboardType = 'default',
  validator,
  leftComponent = null,
  rightComponent = null,
  options = [],
  maxLength,
  capitalize = false,
  isReport,
  onKeyPress,
  selectTextOnFocus = false,
  fillColor,
  strokeWidth,
  strokeColor,
  autoComplete,
  inlineImageLeft,
  multiline = false,
  editable = true,
  onFocus = {onFocus},
  isFocusedRequired = false,
}) => {
  const {size, colors} = useTheme();
  const [focus, setFocus] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const labelPosition = useRef(new Animated.Value(28)).current;
  const labelMargin = useRef(new Animated.Value(5)).current;
  const labelSize = useRef(new Animated.Value(1)).current;
  const labelHeight = useRef(new Animated.Value(55)).current;

  let dropOpacity = useRef(new Animated.Value(0)).current;
  let dropMargin = useRef(new Animated.Value(-30)).current;

  useEffect(() => {
    Animated.timing(dropOpacity, {
      duration: 500,
      easing: Easing.linear,
      toValue: showDropDown ? 1 : 0,
      useNativeDriver: false,
    }).start();

    Animated.timing(dropMargin, {
      toValue: showDropDown ? 20 : -30,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(labelHeight, {
      toValue: 140,
      easing: Easing.linear,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [showDropDown]);

  const onDropdownClick = () => {
    setShowDropDown(prev => !prev);
  };

  const labelAnimation = () => {
    Animated.timing(labelHeight, {
      toValue: 1000,
      duration: 400,
      useNativeDriver: false,
    }).start();
    Animated.timing(labelPosition, {
      toValue: Platform.OS === 'ios' ? 0 : -5,
      duration: 400,
      useNativeDriver: false,
    }).start();
    Animated.timing(labelMargin, {
      toValue: Platform.OS === 'ios' ? -50 : -45,
      duration: 395,
      useNativeDriver: false,
    }).start();
    Animated.timing(labelSize, {
      toValue: 0.7,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  const labelAnimationBack = () => {
    Animated.timing(labelPosition, {
      toValue: 28,
      duration: 400,
      useNativeDriver: false,
    }).start();
    Animated.timing(labelMargin, {
      toValue: 5,
      duration: 395,
      useNativeDriver: false,
    }).start();
    Animated.timing(labelSize, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  switch (type) {
    case 'authInput':
      return (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.inputStroke,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            ...containerStyle,
          }}>
          {isIconAvailable && (
            <Image
              resizeMode="contain"
              style={{
                width: size.width / 20,
                height: size.width / 20,
                ...iconStyles,
              }}
              source={focus ? iconSrc : blurIconSrc}
            />
          )}
          {validator === 'mobile' && (
            <CustomText
              style={{
                fontSize: 20,
                color: colors.primary,
              }}>
              +91
            </CustomText>
          )}
          <TextInput
            value={value}
            allowFontScaling={false}
            onChangeText={val => {
              validate(
                validator,
                val,
                onChangeText,
                // setNamesError,
                // isSpaceRequired
              );
            }}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : '#6C757D'
            }
            secureTextEntry={secureTextEntry}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            maxLength={maxLength}
            style={{
              fontSize: 20,
              color: BLACK_COLOR,
              width: '100%',
              fontFamily: value ? 'Roboto-600' : 'Roboto-400',
              ...inputStyles,
            }}
            placeholder={placeholder}
            editable={editable}
          />
        </View>
      );

    case 'iconInput':
      return (
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: colors.mediumGrey,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            ...containerStyle,
          }}>
          {isIconAvailable && leftComponent}
          <TextInput
            value={value}
            allowFontScaling={false}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChangeText={val => {
              validate(
                validator,
                val,
                onChangeText,
                // setNamesError,
                // isSpaceRequired
              );
            }}
            inlineImageLeft={inlineImageLeft}
            maxLength={maxLength}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : colors.placeholder
            }
            secureTextEntry={secureTextEntry}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            style={{
              fontSize: 16,
              color: BLACK_COLOR,
              width: isIconAvailable ? '90%' : '100%',
              paddingVertical: Platform.OS === 'ios' ? 20 : 14.5,
              paddingLeft: 20,
              ...inputStyles,
            }}
            placeholder={placeholder}
            editable={editable}
          />
          {isIconAvailable && rightComponent}
        </View>
      );
    case 'noIconInput':
      return (
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            height: 55,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: 'rgba(30, 30, 30,0.03)',
            ...containerStyle,
          }}>
          <TextInput
            selectTextOnFocus={selectTextOnFocus}
            ref={innerRef}
            value={value}
            allowFontScaling={false}
            onFocus={() => {
              setFocus(true);
              if (isFocusedRequired) onFocus();
            }}
            onBlur={() => setFocus(false)}
            onChangeText={val => {
              validate(
                validator,
                val,
                onChangeText,
                // setNamesError,
                // isSpaceRequired
              );
            }}
            placeholderTextColor={
              placeholderTextColor
                ? placeholderTextColor
                : 'rgba(54, 54, 54 , 0.7)'
            }
            autoComplete={autoComplete}
            autoCapitalize={capitalize ? 'characters' : 'none'}
            secureTextEntry={secureTextEntry}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            onKeyPress={onKeyPress}
            style={{
              fontSize: 17,
              width: isIconAvailable ? '90%' : '100%',
              paddingVertical: Platform.OS === 'ios' ? 16 : 10.5,
              fontFamily: value ? 'Rubik-Medium' : 'Rubik-Regular',
              color: BLACK_COLOR,
              paddingLeft: 15,
              ...inputStyles,
              letterSpacing: validator === 'mpin' && value.length > 0 ? 10 : 0,
            }}
            placeholder={placeholder}
            maxLength={maxLength}
            multiline={multiline}
            editable={editable}
          />
        </View>
      );
  }
};

export default CustomInput;
