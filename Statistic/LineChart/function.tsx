import data from '../../config.json';
import AsyncStorage from "@react-native-async-storage/async-storage";
const URL = data['URl']
// 傳入的資料格式
const DATA = {
  data: [
    [10, 20, 30, 20, 14, 2, 23],
    [5, 8, 6, 9, 8, 2, 10],
    [5, 10, 20, 10, 5, 0, 30],
  ],
  legend: ['塑膠類', '一般垃圾', '金屬'],
};
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
export const formData = ( data = DATA) => {
    const datasets = data.data.map((value, index) => {
      const legendKey = data.legend[index] as keyof typeof CATEGORYCOLOR;
      return {
          data: value,
          index: index,
          color: CATEGORYCOLOR[legendKey],
          strokeWidth: 3,
      };
    });
  
    const result = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: datasets,
      legend: data.legend,
    };
    return result;
  };

export const getWeeklyStatistic = async(setting:any)=>{
    try {
        const email = await getUserData('email');
        const jsonData = await fetch(URL + 'showWeeklyStatistic',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                "email": email
              })
          }).then(response => response.json());
        const result = formData(jsonData);
        setting(result);
        return true
      } catch (error) {
        console.error('Error fetching data:', error);
        return false
      }
}