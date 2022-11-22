import AsyncStorage from '@react-native-async-storage/async-storage';

var secureStorage = {
  setItem: (key, value) => {
    return AsyncStorage.setItem(key, value);
  },
  getItem: key => {
    const value = AsyncStorage.getItem(key);
    return value;
  },
  clearAll: async () => {
    return await AsyncStorage.clear();
  },
};

export default secureStorage;
