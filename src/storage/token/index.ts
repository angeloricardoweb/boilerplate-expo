import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (value: string) => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};
