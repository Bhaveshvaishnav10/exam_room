import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import CustomInput from '../../components/custom_input';
import {HireIcon} from '../../resources/assestsManager';
import Icon from 'react-native-vector-icons/Feather';
import {BLACK_COLOR, TEXT_COLOR} from '../../resources/colorManager';
import CustomText from '../../components/custom_text';
import CustomButton from '../../components/custom_button';
import {LOGIN_SCREEN} from '../../resources/navigationManager';
import secureStorage from '../../../utils/secureStorage';
import Toaster from '../../../utils/Toaster';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onRegisterUser = async () => {
    const getUser = await secureStorage.getItem('User');

    const parsedUser = JSON.parse(getUser);

    let checkUserExists = [];
    checkUserExists = parsedUser && parsedUser.filter(o => o.email === email);

    if (checkUserExists && checkUserExists?.length > 0) {
      Toaster({
        type: 'errorToast',
        text1: 'User already exists',
      });
      return null;
    }

    if (password && password?.length < 8) {
      Toaster({
        type: 'errorToast',
        text1: 'Password Length must be between 8 and 16 characters',
      });
      return null;
    }

    if (parsedUser && parsedUser?.length > 0) {
      await secureStorage.setItem(
        'User',
        JSON.stringify([{email, password, userName}, ...parsedUser]),
      );
      Toaster({
        type: 'successToast',
        text1: 'Registered successfully',
      });
    } else {
      await secureStorage.setItem(
        'User',
        JSON.stringify([{email, password, userName}]),
      );
      Toaster({
        type: 'successToast',
        text1: 'Registered successfully',
      });
    }
  };

  useEffect(() => {
    if (email && password && userName) {
      setDisabled(false);
    } else setDisabled(true);
  }, [email, password, userName]);
  return (
    <View style={styles.container}>
      <Image source={HireIcon} style={styles.image} />

      <View style={{width: '100%'}}>
        <CustomText style={{fontSize: 24}}>Register,</CustomText>
      </View>

      <CustomInput
        type={'iconInput'}
        onChangeText={data => {
          setUserName(data);
        }}
        isIconAvailable={true}
        leftComponent={
          <Icon
            name="user"
            style={{
              position: 'absolute',
              color: email ? TEXT_COLOR : '#979C9E',
              left: 10,
            }}
            size={24}
          />
        }
        placeholder="Enter user name"
        placeholderTextColor={'#979C9E'}
        isFocusedRequired={true}
        onFocus={() => {}}
        containerStyle={{
          marginTop: 20,
          backgroundColor: '#F2F4F5',
          borderWidth: 0,
          width: '100%',
          height: 50,
        }}
        validator="name"
        value={userName}
        inputStyles={{
          color: BLACK_COLOR,
          fontFamily: 'Nunito-Regular',
          paddingLeft: 30,
          height: 50,
        }}
      />

      <CustomInput
        type={'iconInput'}
        onChangeText={data => {
          setEmail(data);
        }}
        isIconAvailable={true}
        leftComponent={
          <Icon
            name="mail"
            style={{
              position: 'absolute',
              color: email ? TEXT_COLOR : '#979C9E',
              left: 10,
            }}
            size={24}
          />
        }
        placeholder="Enter email address"
        placeholderTextColor={'#979C9E'}
        isFocusedRequired={true}
        onFocus={() => {}}
        containerStyle={{
          marginTop: 20,
          backgroundColor: '#F2F4F5',
          borderWidth: 0,
          width: '100%',
          height: 50,
        }}
        validator="email"
        value={email}
        inputStyles={{
          color: BLACK_COLOR,
          fontFamily: 'Nunito-Regular',
          paddingLeft: 30,
          height: 50,
        }}
      />

      <CustomInput
        type={'iconInput'}
        onChangeText={data => {
          setPassword(data);
        }}
        isIconAvailable={true}
        rightComponent={
          <Icon
            name={showPassword ? 'eye' : 'eye-off'}
            style={{
              position: 'absolute',
              color: '#979C9E',
              right: 10,
            }}
            size={22}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        leftComponent={
          <Icon
            name="lock"
            style={{
              position: 'absolute',
              color: password ? TEXT_COLOR : '#979C9E',
              left: 10,
            }}
            size={24}
          />
        }
        secureTextEntry={showPassword ? false : true}
        placeholder="Enter password"
        placeholderTextColor={'#979C9E'}
        maxLength={16}
        isFocusedRequired={true}
        onFocus={() => {}}
        containerStyle={{
          marginTop: 20,
          backgroundColor: '#F2F4F5',
          borderWidth: 0,
          width: '100%',
          height: 50,
        }}
        validator="password"
        value={password}
        inputStyles={{
          color: BLACK_COLOR,
          fontFamily: 'Nunito-Regular',
          paddingLeft: 30,
          height: 50,
        }}
      />

      <CustomButton
        title={'Sign Up'}
        disabled={disabled}
        style={{marginTop: 25, height: 50}}
        onPress={() => onRegisterUser()}
      />

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <CustomText
          style={{
            fontFamily: 'Nunito-Regular',
            fontSize: 16,
            color: '#8D8D8D',
          }}>
          Already have an account?
        </CustomText>

        <Pressable
          onPress={() => {
            navigation.navigate(LOGIN_SCREEN);
          }}>
          <CustomText
            style={{
              color: TEXT_COLOR,
              fontFamily: 'Nunito-Regular',
              fontSize: 16,
            }}>
            {' '}
            Sign in
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
