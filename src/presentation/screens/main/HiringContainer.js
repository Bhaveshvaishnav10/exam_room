import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../../components/custom_text';
import {TEXT_COLOR} from '../../resources/colorManager';
import Icon from 'react-native-vector-icons/Feather';

const HiringContainer = ({data}) => {
  return (
    <View
      style={{
        borderRadius: 12,
        padding: 2,

        padding: 15,
      }}>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 60,
              backgroundColor: '#338BA8',
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {data.name.slice(0, 2).toUpperCase()}
            </CustomText>
          </View>
          <View>
            <CustomText
              style={{
                color: TEXT_COLOR,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {data.name}
            </CustomText>
            <CustomText
              style={{
                color: 'grey',
                fontSize: 14,
                marginTop: 5,
              }}>
              {data.companies}
            </CustomText>
          </View>
        </View>

        <Icon name="chevrons-right" color={TEXT_COLOR} size={20} />
      </View>
    </View>
  );
};

export default HiringContainer;

const styles = StyleSheet.create({});
