import {StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';

const Toaster = ({type, text1, position = 'top'}) => {
  return Toast.show({
    type: type,
    text1: text1,
    position: position,
    props: {},
  });
};

export default Toaster;

const styles = StyleSheet.create({});
