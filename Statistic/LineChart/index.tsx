import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { getWeeklyStatistic, chartData, exampleChartData } from './function'

const BackEndConnect = false
const LineChartComponent = ({ focusCategory, setFocusCategory }: any) => {
  const [lineChartData, setLineChartData] = useState(chartData)
  useEffect(() => {
    if (focusCategory == "") {
      setLineChartData(chartData)
    }
    else if (BackEndConnect) {
      getWeeklyStatistic(setLineChartData, focusCategory)
    } else {

      setLineChartData(exampleChartData)
    }
  }, [focusCategory])
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LineChart
        data={lineChartData}
        width={screenWidth - 20}
        curved
        height={250}
        xAxisLabelTextStyle={{ color: 'black', fontSize: 12 }}
        areaChart
        color="rgb(84,219,234)"
        thickness={2}
        hideDataPoints={false}
        dataPointsColor="#4F62C0"
        dataPointsRadius={0}
        noOfSections={4}
        startOpacity={0.4}
        endOpacity={0.1}
        startFillColor={'rgb(84,219,234)'}
        endFillColor={'rgb(84,219,234)'}
        xAxisLabelTexts={lineChartData.map(item => item.label)}
        showVerticalLines
        verticalLinesColor={'#e0e0e0'}
        verticalLinesThickness={1}
        animateOnDataChange
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 0
  }
});

export default LineChartComponent;
