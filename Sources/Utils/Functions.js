import moment from 'moment';
import { Alert, Linking } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const ALERT = ({ Title, Text, Buttons }) => Alert.alert(Title, Text, Buttons);
const wait = ms => new Promise(r => setTimeout(r, ms));
const OpenUrl = url => Linking.openURL(url);
const setAppData = async data => {
  const previousValue = await getAppData();
  if (previousValue) {
    await AsyncStorage.setItem(
      'appdata',
      JSON.stringify({ ...previousValue, ...data }),
    );
  } else {
    await AsyncStorage.setItem('appdata', JSON.stringify(data));
  }
};
const getAppData = async () => {
  const value = await AsyncStorage.getItem('appdata');
  return JSON.parse(value);
};
const formatDate = ({ date, format = 'DD-MM-YYYY' }) => {
  const d = moment(date).format(format);
  return d;
};
const Functions = {
  ALERT,
  OpenUrl,
  setAppData,
  getAppData,
  wait,
  formatDate,
};

export default Functions;
