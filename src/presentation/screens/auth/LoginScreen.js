import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import CustomInput from '../../components/custom_input';
import {HireIcon} from '../../resources/assestsManager';
import Icon from 'react-native-vector-icons/Feather';
import {BLACK_COLOR, TEXT_COLOR} from '../../resources/colorManager';
import CustomText from '../../components/custom_text';
import CustomButton from '../../components/custom_button';
import {HOME_SCREEN, SIGNUP_SCREEN} from '../../resources/navigationManager';
import secureStorage from '../../../utils/secureStorage';
import Toaster from '../../../utils/Toaster';
import MainStackNavigation from '../../navigation/MainStackNavigation';
import {authenticateUser} from '../../../data/redux/authSlice';
import {useDispatch} from 'react-redux';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onLoginUser = async () => {
    const getUser = await secureStorage.getItem('User');

    const parsedUser = JSON.parse(getUser);

    console.log('User: ', parsedUser);

    let checkUserExists = [];
    checkUserExists = parsedUser && parsedUser.filter(o => o.email === email);

    console.log('Checking', checkUserExists);

    if (checkUserExists && checkUserExists?.length === 0) {
      Toaster({
        type: 'errorToast',
        text1: 'User not found',
      });
      return null;
    }

    if (password !== checkUserExists[0].password) {
      Toaster({
        type: 'errorToast',
        text1: 'Password does not match',
      });
      return null;
    }

    Toaster({
      type: 'successToast',
      text1: 'Login successfully',
    });
    secureStorage.setItem('LoggedIn', JSON.stringify(true));
    secureStorage.setItem('Email', email);
    secureStorage.setItem('Name', checkUserExists[0].userName);

    dispatch(authenticateUser(true));
    navigation.navigate(HOME_SCREEN);
  };

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else setDisabled(true);
  }, [email, password]);
  return (
    <View style={styles.container}>
      <Image source={HireIcon} style={styles.image} />

      <View style={{width: '100%'}}>
        <CustomText style={{fontSize: 24}}>Welcome,</CustomText>
      </View>

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
        title={'Sign In'}
        disabled={disabled}
        style={{marginTop: 25, height: 50}}
        onPress={() => onLoginUser()}
      />

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <CustomText
          style={{
            fontFamily: 'Nunito-Regular',
            fontSize: 16,
            color: '#8D8D8D',
          }}>
          Don’t have an account?
        </CustomText>

        <Pressable
          onPress={() => {
            navigation.navigate(SIGNUP_SCREEN);
          }}>
          <CustomText
            style={{
              color: TEXT_COLOR,
              fontFamily: 'Nunito-Regular',
              fontSize: 16,
            }}>
            {' '}
            Sign up
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

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
