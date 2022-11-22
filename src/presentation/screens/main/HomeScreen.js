import {
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TEXT_COLOR} from '../../resources/colorManager';
import CustomText from '../../components/custom_text';
import Icon from 'react-native-vector-icons/Feather';
import JobContainer from './JobContainer';
import HiringContainer from './HiringContainer';
import {set} from 'immer/dist/internal';
import {authenticateUser} from '../../../data/redux/authSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {LOGIN_SCREEN} from '../../resources/navigationManager';
import secureStorage from '../../../utils/secureStorage';

const {width, height} = Dimensions.get('window');

const jobList = [
  {
    name: 'Product Manager',
    companies: 'Infosys , tcs etx',
    openings: '24',
    dark: true,
  },
  {
    name: 'Tech Lead',
    companies: 'Infosys , tcs etx',
    openings: '12',
    dark: false,
  },
];

const jobList1 = [
  {
    name: 'Product Intern',
    companies: 'Intern , tcs',
    openings: '24',
    dark: true,
  },
  {
    name: 'Tech Lead',
    companies: 'Remote, Infosys',
    openings: '12',
    dark: false,
  },

  {
    name: 'Product Manager',
    companies: 'Full time , tcs',
    openings: '24',
    dark: true,
  },
  {
    name: 'Frontend Engineer',
    companies: 'Remote, Infosys',
    openings: '12',
    dark: false,
  },

  {
    name: 'Product Intern',
    companies: 'Intern , tcs',
    openings: '24',
    dark: true,
  },
  {
    name: 'Tech Lead',
    companies: 'Remote, Infosys',
    openings: '12',
    dark: false,
  },
  {
    name: 'Frontend Engineer',
    companies: 'Remote, Google',
    openings: '12',
    dark: false,
  },

  {
    name: 'Product Intern',
    companies: 'Intern , Facebook',
    openings: '24',
    dark: true,
  },
  {
    name: 'Tech Lead',
    companies: 'Remote, Infosys',
    openings: '12',
    dark: false,
  },
];

const HomeScreen = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onDeleteUser = async () => {
    await secureStorage.setItem('User', JSON.stringify([]));
    await secureStorage.setItem('LoggedIn', '');
    await secureStorage.setItem('Email', '');
    await secureStorage.setItem('Name', '');
    dispatch(authenticateUser(false));
    navigation.navigate(LOGIN_SCREEN);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingVertical: 16,
          paddingHorizontal: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: TEXT_COLOR,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <CustomText
              style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>
              BK
            </CustomText>
          </View>
          <CustomText
            style={{fontSize: 20, color: TEXT_COLOR, fontWeight: 'bold'}}>
            Hire.io
          </CustomText>
        </View>

        <Pressable
          onPress={() => {
            setOpenModal(true);
          }}>
          <Icon
            name="trash"
            style={{
              color: 'black',
            }}
            size={24}
          />
        </Pressable>
      </View>

      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <CustomText
          style={{
            fontSize: 20,
            padding: 20,
            fontWeight: 'bold',
          }}>
          Categories
        </CustomText>

        <FlatList
          nestedScrollEnabled={true}
          style={{flexGrow: 0}}
          contentContainerStyle={{
            paddingLeft: 20,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={jobList}
          keyExtractor={item => item.key}
          renderItem={({item, index}) => {
            return <JobContainer key={index} data={item} />;
          }}
        />

        <CustomText
          style={{
            fontSize: 20,
            padding: 20,
            fontWeight: 'bold',
          }}>
          New Hiring
        </CustomText>

        <FlatList
          nestedScrollEnabled={true}
          style={{flexGrow: 0}}
          contentContainerStyle={{}}
          data={jobList1}
          keyExtractor={item => item.key}
          renderItem={({item, index}) => {
            return <HiringContainer key={index} data={item} />;
          }}
        />
      </ScrollView>

      <Modal
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(false);
        }}
        animationType="slide"
        transparent={true}>
        <View
          style={{
            width,
            height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'white',
              height: 140,
              width: '80%',
              borderRadius: 20,
              padding: 20,
            }}>
            <CustomText style={{fontSize: 20}}>Delete profile?</CustomText>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '80%',
                marginTop: 20,
              }}>
              <Pressable
                onPress={() => onDeleteUser()}
                style={{
                  width: '45%',
                  height: 40,
                  backgroundColor: 'red',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomText style={{fontSize: 15, color: 'white'}}>
                  Delete
                </CustomText>
              </Pressable>
              <Pressable
                onPress={() => setOpenModal(false)}
                style={{
                  width: '45%',
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}>
                <CustomText style={{fontSize: 15, color: 'black'}}>
                  No
                </CustomText>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
