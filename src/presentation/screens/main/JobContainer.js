import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../../components/custom_text';
import {TEXT_COLOR} from '../../resources/colorManager';
import Icon from 'react-native-vector-icons/Feather';

const JobContainer = ({data}) => {
  return (
    <View
      style={{
        borderRadius: 12,
        padding: 2,
        width: 320,
        height: 200,
        marginRight: 8,
        backgroundColor: data.dark ? TEXT_COLOR : 'white',
        padding: 15,
        borderWidth: 1,
        borderColor: data.dark ? TEXT_COLOR : 'grey',
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
        }}>
        <View>
          <CustomText
            style={{
              color: !data.dark ? TEXT_COLOR : 'white',
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText
              style={{
                fontSize: 20,
                color: !data.dark ? TEXT_COLOR : 'white',
                fontWeight: 'bold',
              }}>
              {data.openings}
            </CustomText>
            <CustomText
              style={{
                fontSize: 14,
                color: !data.dark ? TEXT_COLOR : 'white',
                marginLeft: 5,
              }}>
              {'Jobs Available'}
            </CustomText>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText
              style={{
                fontSize: 11,
                color: !data.dark ? TEXT_COLOR : 'white',
                marginRight: 5,
              }}>
              {'Show All'}
            </CustomText>
            <Icon
              name="arrow-right"
              style={{
                color: !data.dark ? TEXT_COLOR : 'white',
              }}
              size={18}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default JobContainer;

const styles = StyleSheet.create({});
