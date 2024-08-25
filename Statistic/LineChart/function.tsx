import data from '../../config.json';
import AsyncStorage from "@react-native-async-storage/async-storage";
const URL = data['URl']

export const chartData = [
  {value: 0, label: 'Mon'},
  {value: 0, label: 'Tue'},
  {value: 0, label: 'Wed' },
  {value: 0, label: 'Thu'},
  {value: 0, label: 'Fri'},
  {value: 0, label: 'Sat'},
  {value: 0, label: 'Sun'}
];
//
export const exampleChartData = [
  {value: 0, label: 'Mon'},
  {value: 20, label: 'Tue'},
  {value: 30, label: 'Wed' },
  {value: 4, label: 'Thu'},
  {value: 15, label: 'Fri'},
  {value: 4, label: 'Sat'},
  {value: 7, label: 'Sun'}
];
const CATEGORYCOLOR = {
    塑膠類:  (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    一般垃圾:  (opacity = 1) => `rgba(245, 40, 145, ${opacity})`,
    金屬: (opacity = 1) => `rgba(95, 197, 103, ${opacity})`
}
const getUserData = async(key: string)=>{
    try {
      // 获取存储的UserData
      const userDataString = await AsyncStorage.getItem('UserData');
  
      if (userDataString !== null) {
        // 解析字符串为对象
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
export const getWeeklyStatistic = async(setting:any,category:any)=>{
    try {
        const email = await getUserData('email');
        const jsonData = await fetch(URL + 'showWeeklyStatistic',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                "email": email,
                "category": category
              })
          }).then(response => response.json());
        setting(jsonData)
        return true
      } catch (error) {
        console.error('Error fetching data:', error);
        return false
      }
}