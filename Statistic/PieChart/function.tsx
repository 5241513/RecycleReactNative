import data from '../../config.json';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Dimensions, StyleSheet, Text } from 'react-native';

const URL = data['URl']

export const chartData = [
  { value: 0, label: '塑膠類' },
  { value: 0, label: '一般垃圾' },
  { value: 0, label: '金屬' },
];
//
export const exampleChartData = [
  { value: 10, label: '塑膠類' },
  { value: 20, label: '一般垃圾' },
  { value: 6, label: '金屬' },
  { value: 6, label: '屬' },

];


export const stringToColor = (str: string, opacity = 1) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).slice(-2);
  }

  // Convert the opacity to a two-digit hexadecimal
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0').toUpperCase();

  return `${color}${alpha}`;
}

const getUserData = async (key: string) => {//被用來取 user email
  try {
    //取UserData中的東西
    const userDataString = await AsyncStorage.getItem('UserData');
    if (userDataString !== null) {
      //轉string to JSON
      const userData = JSON.parse(userDataString);
      const result = userData[key];
      return result;
    } else {
      console.log('UserData not found');
      return null;
    }
  } catch (error) {
    console.error('Failed to retrieve or parse UserData:', error);
    return null;
  }
}
export const getAllStatistic = async (setting: any) => {
  try {
    const email = await getUserData('email');
    const jsonData = await fetch(URL + 'showAllStatistic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          "email": email,
        })
    }).then(response => response.json());
    setting(jsonData)
    return true
  } catch (error) {
    console.error('Error fetching data:', error);
    return false
  }
}
