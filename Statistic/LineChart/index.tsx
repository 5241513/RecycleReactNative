import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {formData, getWeeklyStatistic} from './function';

const backEndConnect = false;

const LineChartComponent = () => {
  const [activeLineIndex, setActiveLineIndex] = useState(-1);
  const [loading, setLoading] = useState(true); // Start with loading as true
  const [success,setSuccess] = useState(true)
  const [data, setData] = useState(null);

  useEffect(() => {
    // Set data once when the component mounts
    const fetchData = async () => {
      if (backEndConnect) {
        const result = await getWeeklyStatistic(setData);
        setSuccess(result)
      } else {
        setData(formData())
      }
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>載入中請稍候</Text>
      </View>
    );
  }
  if(!success){
    return (
        <View>
          <Text>失敗載入，請重新連線</Text>
        </View>
      );
  }

  return (
    <View>
      <LineChart
        bezier
        withHorizontalLabels={true}
        withVerticalLabels={true}
        withShadow={false}
        data={data}
        width={Dimensions.get('window').width}
        height={250}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default LineChartComponent;
